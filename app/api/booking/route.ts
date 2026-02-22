import { db } from "@/lib/db";
import { parse } from "url";
import { PAGE_SIZE } from "@/utils/config";

export const GET = async (req: Request) => {
  const query = parse(req.url, true).query;

  const { status, sortBy, page } = query;

  let where: any = {};
  let orderBy: any = {};
  let skip;

  if (status && status !== "all") {
    where.status = status;
  }

  if (sortBy) {
    const [field, direction] = String(sortBy).split("-");
    orderBy[field] = direction;
  }

  if (page) {
    skip = (+page - 1) * PAGE_SIZE;
  }

  try {
    const bookings = await db.booking.findMany({
      where,
      orderBy,
      skip,
      take: PAGE_SIZE,
      select: {
        id: true,
        createdAt: true,
        startDate: true,
        endDate: true,
        numGuests: true,
        numNights: true,
        status: true,
        totalPrice: true,
        cabin: {
          select: {
            name: true,
          },
        },
        guest: {
          select: {
            fullName: true,
            email: true,
          },
        },
      },

    });

    const count = await db.booking.count({
      where,
      orderBy,
    });


    return new Response(JSON.stringify({ bookings, count }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Fail to fetch bookings", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const {
      startDate,
      endDate,
      numNights,
      numGuests,
      cabinPrice,
      extrasPrice,
      totalPrice,
      hasBreakfast,
      observations,
      cabinId,
      guestName,
      guestEmail,
      nationality,
      country,
      nationalID,
    } = await req.json();

    // 1. Create or Find Guest
    let guest = await db.guest.findFirst({
      where: { email: guestEmail }
    });

    if (!guest) {
      guest = await db.guest.create({
        data: {
          fullName: guestName,
          email: guestEmail,
          nationality,
          country,
          nationalID,
        }
      });
    }

    // 2. Create Booking
    const booking = await db.booking.create({
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        numNights,
        numGuests,
        cabinPrice,
        extrasPrice,
        totalPrice,
        status: "unconfirmed",
        hasBreakfast,
        isPaid: false,
        observations: observations || "",
        cabinId,
        guestId: guest.id,
      },
    });

    return new Response(JSON.stringify(booking), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Fail to create booking", { status: 500 });
  }
};
