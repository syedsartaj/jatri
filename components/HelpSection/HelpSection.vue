<template>
  <div class="p-4 lg:p-[100px]">
    <div class="flex flex-wrap justify-between items-start gap-x-8">
      <div>
        <img src="@/assets/images/home/helpImage.svg" alt="" />
        <h2
          class="text-[32px] leading-10 text-blackPrimary font-medium mt-6 lg:mt-8"
        >
          How can we help you?
        </h2>
        <p class="text-blackLight text-sm leading-5 font-normal mt-4">
          Still need help?
          <span class="text-corporate underline ml-[6px] text-xs font-medium"
            ><a href="https://jatri.co/contact-us" target="_blank" class=""
              >Contact Us</a
            >
            <img
              src="@/assets/images/icons/contact-rightArrow.svg"
              alt=""
              class="inline-block w-[5.19px] ml-[5.48px]"
          /></span>
        </p>
      </div>
      <div class="w-full lg:w-[710px] mt-6 lg:mt-0">
        <Accordion
          v-for="(data, i) in accordionData"
          :accordion="data"
          :index="i"
          :key="i"
          :open="data.open"
          @toggleOpen="toggleOpen"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpSection",
  data() {
    return {
      accordionData: [
        {
          heading: "Payment details- bKash, Nagad, & Bank Cards",
          details: `The Payment can be done through Nagad, bKash, visa cards or master cards.
                      <ul class='list-disc ml-5'>
                        <li class='mt-2'>If a customer has sent payment to Jatri.co but the e-ticket is not confirmed or generated, i.e., there is no transaction ID or tickets booked/reserved by the mobile number of the mobile payment account, he can claim for refund in the similar procedure as above, without the ticket number. Such refunds will be given 7 business days (excluding Friday and Saturday) AFTER the event/trip has taken place. This is applicable for eid times also.</li>
                        <li class='mt-2'>If a customer has made an excess or less payment for a ticket accidentally, he is eligible for refund but he must claim for the refund within 24 hours of making the payment.</li>
                        <li class='mt-2'>If a customer has reserved a ticket and made a payment, however, for some reason, the ticket purchase process was not successful and a ticket was not issued, a customer can claim refund as per the policy above. Ticket number is not required, but mobile # used for booking and other information are required. For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile payment company which will be deducted from the eligible refund amount. Similar conditions will apply if the bank charges any such additional fee.</li>
                        <li class='mt-2'>In case of card payments, the last 4 digits of the card type of card is also needed. It is to be noted that for reasons beyond Jatri.co’s control, card payment may sometimes require time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.</li>
                        <li class='mt-2'>In case of BKash payments, a full mobile number will be required. It is to be noted that for reasons beyond Jatri.co’s control, payment may require some time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.</li>
                      </ul>
                    `,
          open: false,
        },
        {
          heading: "How to buy Tickets via website?",
          details: `The easiest way to buy bus tickets online through Jatri is at your door now. 
                      <ul class='list-disc ml-5'>
                        <li class='mt-2'>First, you have to go the Jatri website: <a href='https://ticket.jatri.co/' class='text-blue-500 underline'>https://ticket.jatri.co/</a></li>
                        <li class='mt-2'>Secondly, you will have to select your location, where to go, which kind of bus you need and the date of your journey.</li>
                        <li class='mt-2'>Then click the <span class='text-blackPrimary font-bold'>“book now”</span> option and provide all the information.</li>
                        <li class='mt-2'>After making the payment process you will get your tickets.</li>
                      </ul>
                    `,
          open: false,
        },
        {
          heading: "Customer Service",
          details: `The customer service team of Jatri services Limited is open from 7am to 11:59pm. For any kind of help or queries or questions, you can call the customer service number 09642080808.`,
          open: false,
        },
        {
          heading: "Ticket Cancellation Procedures",
          details: `If you want to make a cancellation to your booking ticket, you must follow some rules: 
                      <ul class='list-decimal ml-5'>
                      <li class="mt-2">
                        First, you have to go to the ticket history option. You need to add your
                        phone number/PNR/transaction ID to search for your ticket.
                      </li>
                      <li class="mt-2">
                        Click at the cancellation option. Your request will be submitted to our
                        team.
                      </li>
                      <li class="mt-2">
                        Your money will be refunded with following our refund & cancellation
                        policy.
                      </li>
                      </ul>
                      <br>There are few cancellation policies: <br>
                      <ul class='list-disc ml-5 mt-4'>
                        <li>
                          <span class="font-medium">Auto cancellation</span>
                          will happen if the customer fails to report at the reporting station
                          15 minutes before the bus arrives.
                        </li>

                        <li>
                          If the customer
                          <span class="font-medium">fails to pay</span> the full amount that
                          mentioned in the screen will not get the activated tickets.
                        </li>

                        <li>
                          To be eligible for refund, customers need to cancel the ticket from
                          <span class="font-medium">‘Ticket History’</span> a day before<span
                            class="font-medium"
                            >(Excluding 12:00 AM to 07:00 AM)</span
                          >
                          the journey time. And must report the cancellation to the support
                          center (i.e Call 09642080808 or email to
                          <span type="email" class="text-[#0000FF] underline"
                            >info@jatri.co</span
                          >).
                        </li>
                        <li>
                          Only <span class="font-medium">during Eid time</span>, customers are
                          eligible for refund ONLY if the operator cancels the trip and cannot
                          provide an alternative arrangement. (<span class="font-medium"
                            >Note</span
                          >: Terms and conditions of refund policy might update or change from
                          time to time without any notice)
                        </li>
                        <li>
                          <span class="font-medium">For mobile payments</span>, it is the
                          responsibility of the customer to input transaction ID (if
                          applicable), PIN, OTP properly within time to confirm his ticket by
                          himself.
                        </li>
                        <li>
                          Jatri.co sometimes does the verification for the customer as a
                          courtesy, but it is not jatri.co’s responsibility or service promise.
                        </li>
                        <li>
                          For mobile payments, customers must complete payment and also verify
                          transactions.
                        </li>
                        <li>
                          During Eid sales month, Jatri.co will not do any verification on
                          behalf of the customers.
                        </li>
                        <li>
                          If the customer faces any hassle at the counter after purchasing
                          tickets from Jatri.co, then the user has to give the complaint to our
                          customer service or give an email to info@jatri.co within 3 days(72
                          hours) from the departure time.
                        </li>
                       </ul>
                    `,
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen: function (index) {
      this.accordionData = this.accordionData.map((accordion, i) => {
        if (index === i) {
          accordion.open = !accordion.open;
        } else {
          accordion.open = false;
        }
        return accordion;
      });
    },
  },
};
</script>
