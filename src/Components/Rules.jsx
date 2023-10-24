import React from "react";

export const Rules = () => {
    return(
        <div className="rules-container w-full bg-slate-700 h-fit p-3 mb-20 rounded-xl shadow-black shadow-md ">
            <h2 className="text-center text-lime-300 text-3xl font-bold">Service Rules</h2>
            <div className="rule-item w-full p-5 flex gap-3">
                <div className="leftside w-2/4">
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">1. Time Limit</h3>
                    <p className="indent-10 text-white">Each session or round of play is limited to a maximum duration of 1 hour.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">2. Booking Requirement</h3>
                    <p className="indent-10 text-white">Players must make a booking in advance to reserve a time slot for their activity.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">3. Booking Confirmation</h3>
                    <p className="indent-10 text-white">Bookings are confirmed upon receipt of payment or any other specified confirmation process.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">4. Cancellation Policy</h3>
                    <p className="indent-10 text-white">Players are required to cancel their booking within a specified time frame if they are unable to attend. Failure to do so may result in penalties or forfeiture of the booking fee.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">5. Booking Extensions</h3>
                    <p className="indent-10 text-white">Extensions to the allotted 1-hour time slot may be granted based on availability and adherence to club policies.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">6. Fair Usage Policy</h3>
                    <p className="indent-10 text-white">Players are encouraged to be mindful of others and use the facilities efficiently during their allotted time.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">7. Penalties for Overtime</h3>
                    <p className="indent-10 text-white">Exceeding the 1-hour time limit may result in additional charges or penalties.</p>
                </div>
                <div className="right-side w-2/4">
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">8. Advance Booking Window</h3>
                    <p className="indent-10 text-white">Bookings can be made within a defined time frame in advance, ensuring fair access for all members.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">9. Member Priority</h3>
                    <p className="indent-10 text-white">Club members may have priority in booking time slots over non-members.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">10. Guest Bookings</h3>
                    <p className="indent-10 text-white">Guests are welcome but must adhere to the same booking procedures and time limits as members.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">11. Rescheduling Policy</h3>
                    <p className="indent-10 text-white">Players may be allowed to reschedule their booking based on availability and adherence to club policies.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">12. Facility Maintenance</h3>
                    <p className="indent-10 text-white">The club reserves the right to schedule maintenance periods, during which certain facilities may be temporarily unavailable. Advance notice will be provided.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">13. Compliance with Club Rules</h3>
                    <p className="indent-10 text-white">All players must comply with the club's rules and regulations, including those related to time limits and booking procedures.</p>
                    <h3 className="bg-lime-300 pt-1 pb-2 pl-3 pr-3 font-bold my-2 w-fit rounded-full">14. Enjoying and Happiness</h3>
                    <p className="indent-10 text-white">Keep doing what you want and be enjoy and happy.</p>
                </div>
            </div>
        </div>
    )
}