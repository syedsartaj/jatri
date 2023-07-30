<template>
  <div class="py-[16px] px-[17px] md:py-[30px] md:px-[100px] h-112">
    <div class="md:bg-white p-4 md:p-[40px]">
      <!-- mobile dropdown-->
      <div class="block md:hidden bg-white">
        <button
          @click="toggler"
          class="
            w-full
            py-3
            px-2
            leading-5
            text-sm
            font-medium
            text-blackPrimary
            rounded
            flex
            justify-between
          "
        >
          Terms & Conditions
          <img src="@/assets/images/ashDropDown.svg" alt="" />
        </button>
        <div v-show="dropDown" class="w-full bg-[#f7f7f7] rounded p-2">
          <p class="text-base font-medium text-blackPrimary">
            Table of contents
          </p>

          <hr class="mt-2 border-t border-[#DBDBDB]" />
          <a
            @click="selectedContent = 'terms-condition'"
            href="#terms-and-conditions"
            :class="
              $route.hash === '#terms-and-conditions'
                ? 'text-white bg-[#1E88E5]'
                : 'text-black bg-transparent'
            "
            class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded"
            >Terms & Conditions</a
          >
          <a
            @click="selectedContent = 'return-policy'"
            href="#return-and-refund-policy"
            :class="
              $route.hash === '#return-and-refund-policy'
                ? 'text-white bg-[#1E88E5]'
                : 'text-black bg-transparent'
            "
            class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded"
            >Return & Refund Policies</a
          >
          <a
            @click="selectedContent = 'privacy-policy'"
            href="#privacy-policy"
            :class="
              $route.hash === '#privacy-policy'
                ? 'text-white bg-[#1E88E5]'
                : 'text-black bg-transparent'
            "
            class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded"
            >Privacy Policy
          </a>
        </div>
      </div>

      <div class="md:flex md:gap-x-[32px]">
        <div class="hidden md:block w-[300px] bg-[#F7F7F7] rounded-[14px] p-6">
          <div class="sticky top-24">
            <p class="text-base font-medium text-blackPrimary">
              Table of contents
            </p>
            <hr class="mt-2 border-t border-[#DBDBDB]" />
            <a
              @click="selectedContent = 'terms-condition'"
              href="#terms-and-conditions"
              :class="
                $route.hash === '#terms-and-conditions'
                  ? 'text-white bg-[#1E88E5]'
                  : 'text-black bg-transparent'
              "
              class="
                mt-4
                block
                w-full
                leading-5
                text-sm
                font-medium
                p-2
                rounded
              "
              >Terms & Conditions</a
            >
            <a
              @click="selectedContent = 'return-policy'"
              href="#return-and-refund-policy"
              :class="
                $route.hash === '#return-and-refund-policy'
                  ? 'text-white bg-[#1E88E5]'
                  : 'text-black bg-transparent'
              "
              class="
                mt-4
                block
                w-full
                leading-5
                text-sm
                font-medium
                p-2
                rounded
              "
              >Return & Refund Policies</a
            >
            <a
              @click="selectedContent = 'privacy-policy'"
              href="#privacy-policy"
              :class="
                $route.hash === '#privacy-policy'
                  ? 'text-white bg-[#1E88E5]'
                  : 'text-black bg-transparent'
              "
              class="
                mt-4
                block
                w-full
                leading-5
                text-sm
                font-medium
                p-2
                rounded
              "
              >Privacy Policy
            </a>
          </div>
        </div>

        <!-- content start -->
        <div class="bg-white p-4 w-full mt-10">
          <p id="terms-and-conditions">&nbsp;</p>
          <!-- Terms and Condition -->
          <div :class="$route.hash === '#terms-and-conditions' ? 'mt-20' : ' '">
            <p
              class="
                text-blackPrimary
                leading-8
                md:leading-9
                text-2xl
                md:text-[28px]
                font-medium
                md:font-semibold
              "
            >
              Terms & Conditions
            </p>
            <p class="text-blackPrimary text-xl font-bold mt-4 md:mt-8">
              General Terms:
            </p>
            <div class="ml-4 md:ml-9">
              <ul
                class="
                  list-disc
                  mt-2
                  md:mt-4
                  leading-6
                  md:leading-5
                  text-[16px]
                  md:text-sm
                  text-blackPrimary
                  font-[300] font-inter
                  text-justify
                "
              >
                <li class="">
                  The ticket will be treated as canceled if the passenger fails
                  to report at the reporting station 15 minutes before the bus
                  arrival.
                </li>
                <li>
                  The authority reserves the right to change schedules/seats in
                  case of emergency situations.
                </li>
                <li>
                  The authority will not be held responsible for any illegal
                  goods carried by the passenger.
                </li>
                <li>
                  Passenger may cancel his/her tickets prior to 24 hours from the time of journey.
                </li>
              </ul>
            </div>
            <p class="text-blackPrimary text-xl font-bold mt-4 md:mt-8">
              Other Terms:
            </p>
            <p class="text-blackPrimary text-xl font-medium mt-4 md:mt-8">
              Jatri.co is only the ticket reseller. It does not operate
              bus/cruise services of its own.
            </p>

            <p class="text-blackPrimary text-xl font-medium mt-4 md:mt-8">
              Jatri.co's responsibilities include:
            </p>
            <div class="md:ml-9">
              <ul
                class="
                  list-disc
                  dash-type
                  mt-2
                  md:mt-4
                  leading-6
                  md:leading-5
                  text-[16px]
                  md:text-sm
                  text-blackPrimary
                  font-[300] font-inter
                "
              >
                <li class="">
                  Issuing a valid e-ticket (a ticket that will be accepted by
                  the bus/cruise operators) for its' network of operations;
                </li>
                <li>
                  Providing customer support and information regarding ticket
                  availability and online purchase;
                </li>
              </ul>
            </div>

            <p class="text-blackPrimary text-xl font-medium mt-4 md:mt-8">
              Jatri.co' responsibilities do NOT include:
            </p>
            <div class="ml-4 md:ml-9">
              <ul
                class="
                  list-disc
                  mt-2
                  md:mt-4
                  leading-6
                  md:leading-5
                  text-[16px]
                  md:text-sm
                  text-blackPrimary
                  font-[300] font-inter
                "
              >
                <li>The bus/cruise operator changes ticket price.</li>
                <li>The bus/cruise not departing/ reaching on time.</li>
                <li>
                  The bus/cruise seats not being up to the customer's
                  expectation.
                </li>
                <li>
                  The bus/cruise operator canceling the trip due to unavoidable
                  reasons.
                </li>
                <li>
                  The baggage of the customer getting lost/ stolen/damaged.
                </li>
                <li>
                  The bus/cruise operator changes a customer's seat at the last
                  minute to accommodate a lady/child/patient or any other
                  reason.
                </li>
                <li>
                  The customer waiting at the wrong boarding point (please call
                  the bus operator to find out the exact boarding point).
                </li>
                <li>
                  The bus/cruise operator changing the boarding point and/or
                  using a pick-up vehicle at the boarding point to take
                  customers to the bus/cruise departure point.
                </li>
                <li>
                  The departure times mentioned on the ticket are only tentative
                  timings. However, the bus/cruise will not leave the source
                  before the time that is mentioned on the ticket.
                </li>
              </ul>
            </div>

            <p class="text-base font-normal text-blackPrimary mt-4 md:mt-8">
              Passengers are required to furnish the following at the time of
              boarding the bus - A copy of the ticket (A print out of the
              e-ticket or the print out of the ticket provided on website or SMS
              confirmation. Failing to do so, they may not be allowed to board
              the bus/cruise.
            </p>

            <div class="ml-4 md:ml-9">
              <ul
                class="
                  list-disc
                  mt-2
                  md:mt-4
                  leading-6
                  md:leading-5
                  text-[16px]
                  md:text-sm
                  text-blackPrimary
                  font-[300] font-inter
                "
              >
                <li class="">
                  <p class="text-blackPrimary text-xl font-medium">
                    Cancellation Policy:
                    <span class="ml-2 text-base font-normal text-blackPrimary">
                      The tickets booked through Jatri.co are only cancellable
                      from Jatri Online as per Cancellation Policy</span
                    >
                  </p>
                </li>
                <li>
                  Please note that the cancellation fee and cancellation period
                  may differ from one bus/cruise operator to another.
                </li>
                <li>
                  If purchase confirmation email/SMS gets delayed or fails
                  because of technical reasons or as a result of incorrect ID /
                  phone number provided by the user etc. a ticket will be
                  considered 'purchased' as long as the ticket shows up on the
                  confirmation page of
                  <span class="font-medium">www. Jatri.co</span>
                </li>
                <li>
                  If the E-mail/SMS is not received then please call our
                  customer care or email us to
                  <span class="font-medium">info@Jatri.co</span> for
                  confirmation.
                </li>
                <li>
                  Email/SMS service will not apply to customers purchasing
                  tickets at the respective bus/cruise counters. It will apply
                  for purchase through online and our agent points and
                  purchasing through call centers.
                </li>
                <li>
                  Passenger cannot claim
                  <span class="font-medium">www.Jatri.co</span> liable for any
                  situation, occurrence etc. happen due to failure of any
                  responsibility of passenger or the bus/cruise operators.
                </li>
                <li>
                  <span class="font-medium">www.Jatri.co</span> holds the right
                  to update or change any terms time to time without any prior
                  notice.
                </li>
                <li>
                  Any kind of ticket cancellation might not be allowed during
                  <span class="font-medium">Public Holidays</span> journey as
                  per bus company decision.
                </li>
                <li>
                  Tickets of international routes are not allowed for
                  cancellation, refund or change.
                </li>
                <li>No change, no cancel tickets before 10 days to Eid.</li>
              </ul>
            </div>

            <p class="text-base font-normal text-blackPrimary mt-4">
              EID NOTICE: EID TICKETS ARE NON REFUNDABLE AND CANNOT BE CHANGED.
              DUE TO UNAVOIDABLE CIRCUMSTANCES (i.e MECHANICAL FAILURE OR WORST
              TRAFFIC JAM), SCHEDULE MIGHT BE DELAYED. IN SUCH CONDITION
              JATRI.CO OR ITS BUS/CRUISE OPERATORS WILL NOT BE RESPONSIBLE IF
              ANY TRIP IS CANCELED, PASSENGER WILL GET REFUND ONLY COUNTER FARE
              PRICE. JATRI.CO ONLINE TRANSACTION FEES WILL BE DEDUCTED FROM
              TOTAL PAID AMOUNT AND WILL NOT BE REFUNDED
            </p>

            <div class="mt-6">
              <p class="text-base font-normal text-blackPrimary">
                For more queries email us:
                <span class="font-bold">info@jatri.co</span>
              </p>
              <p class="text-base font-normal text-blackPrimary">
                Call us <span class="font-bold">@ 09642080808</span>
              </p>
            </div>
          </div>

          <hr
            id="return-and-refund-policy"
            class="mt-6 border-t border-[#DBDBDB]"
          />
          <!-- Return and refund policy -->
          <div
            :class="$route.hash === '#return-and-refund-policy' ? 'mt-20' : ' '"
          >
            <p
              class="
                mt-6
                text-blackPrimary
                leading-8
                md:leading-9
                text-2xl
                md:text-[28px]
                font-medium
                md:font-semibold
              "
            >
              Return & Refund Policies
            </p>
            <p class="text-base font-bold text-blackPrimary mt-4">
              Before buying a ticket, customers are requested to read the
              following cancellation and refund policies carefully.
            </p>

            <p class="text-base font-bold text-blackPrimary mt-4">
              Cancellation Policy:
            </p>
            <p
              class="
                text-base
                font-normal
                text-blackPrimary text-justify
                mt-2
                md:mt-4
              "
            >
              Tickets bought through Jatri.co can be canceled as per the
              cancellation policy below:
            </p>
            <div class="ml-4 md:ml-9 mt-4">
              <ul
                class="
                  list-disc
                  leading-6
                  md:leading-5
                  text-[16px]
                  md:text-sm
                  text-blackPrimary
                  font-[300] font-inter
                "
              >
                <li>
                  <span class="font-medium"> Jatri.co</span>
                  is bound to comply with the terms set by the operator/event
                  organizer/vendor whose ticket it is selling. So, if the
                  operator/event organizer denies refund even though the claim
                  was made within the terms mentioned here, Jatri.co will be
                  unable to issue such refund.
                </li>
              </ul>
            </div>

            <p class="text-base font-bold text-blackPrimary mt-4">
              Auto cancellation:
            </p>
            <div class="ml-4 md:ml-9 mt=4">
              <ul
                class="
                  list-disc
                  leading-6
                  md:leading-5
                  text-[16px]
                  md:text-sm
                  text-blackPrimary
                  font-[300] font-inter
                "
              >
                <li>
                  The ticket will be treated as canceled if the passenger fails
                  to report at the reporting station 15 minutes before the bus
                  arrival.
                </li>
              </ul>
            </div>

            <p class="text-base font-bold text-blackPrimary mt-4">
              Failure to Pay:
            </p>
            <div class="ml-4 md:ml-9 mt-4">
              <ul
                class="
                  list-disc
                  leading-6
                  md:leading-5
                  text-[16px]
                  md:text-sm
                  text-blackPrimary
                  font-[300] font-inter
                "
              >
                <li>
                  No ticket will be activated unless the customer has paid the
                  full amount mentioned on the screen.
                </li>
                <li>
                  For mobile payments, it is the responsibility of the customer
                  to input transaction ID (if applicable), PIN, OTP properly
                  within time to confirm his ticket by himself.
                </li>
                <li>
                  <span class="font-medium"> Jatri.co</span> sometimes does the
                  verification for the customer as a courtesy, but it is not
                  jatri.co’s responsibility or service promise.
                </li>
              </ul>
            </div>

            <p class="text-base font-bold text-blackPrimary mt-4">
              Ticket cancellation eligibility
            </p>
            <p class="text-base font-bold text-blackPrimary">
              Regular Time (Non-Eid Period):
            </p>

            <p
              class="text-base font-medium text-blackPrimary mt-4 text-justify"
            >
              To be eligible for refund, customers need to cancel the ticket from
              jatri.co before the applicable time before the departure. And must
              report the cancelation to the support center (i.e. Call
              09642080808 or email to info@jatri.co) of Jatri.co
            </p>
            <!--table-->
            <div class="mt-4 border border-[#DBDBDB] rounded">
              <table class="min-w-full text-center">
                <thead>
                  <tr
                    class="
                      bg-[#F7F7F7]
                      p-1
                      leading-[16px]
                      md:leading-6
                      text-[12px]
                      md:text-[16px]
                      font-medium
                    "
                  >
                    <th class="p-1 md:p-4 border-r border-[#DBDBDB]"></th>
                    <th class="p-1 md:p-4 border-r border-[#DBDBDB]">
                      Hours before trip time
                    </th>
                    <th class="p-1 md:p-4">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="
                      leading-[16px]
                      md:leading-6
                      text-[12px]
                      md:text-[16px]
                      font-medium
                    "
                  >
                    <td class="p-1 md:p-4 border-r border-[#DBDBDB]">
                      Jatri Online
                    </td>
                    <td class="p-1 md:p-4 border-r border-[#DBDBDB]">24</td>
                    <td class="p-1 md:p-4 border-r border-[#DBDBDB]">
                      Excluding 12:00 AM to 07:00 AM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p class="text-base font-bold text-blackPrimary mt-4">
              During Eid:
            </p>
            <p class="text-base font-normal text-blackPrimary mt-4">
              For Eid tickets, customers are eligible for refund ONLY if the
              operator cancels the trip and cannot provide an alternative
              arrangement.
            </p>
            <p class="text-base font-normal text-blackPrimary">
              Customers MUST claim a refund at the operator’s counters in case
              of trip cancellation.
            </p>
            <p class="text-base font-normal text-blackPrimary">
              Customers must claim a refund from the bus operator’s counter
              before trip time.
            </p>

            <p class="text-base font-medium text-blackPrimary mt-4">
              Refund Policy
            </p>
            <p class="text-base font-medium text-blackPrimary">
              Regular Time (Non-Eid Period):
            </p>

            <p
              class="text-base font-normal text-blackPrimary text-justify mt-4"
            >
              No ticket will be refunded unless it has been canceled as per the
              cancellation policy above. In case of technical problems or any
              failed transaction due to network failure, time delay on complete
              payment, input transaction ID/validation of transaction (in case
              of mobile payment) or any other situation where payment is
              successful but ticket is not generated in that case.
            </p>

            <p
              class="text-base font-normal text-blackPrimary text-justify mt-2"
            >
              Incase of refunding the money, it will take 7 business days for
              MFS(bKash, Nagad) and 12/15 business days for SSL Commerz/ Bank
              payment.
            </p>

            <p class="text-base font-bold text-blackPrimary mt-4">
              Amount of Refund:
            </p>
            <p
              class="text-base font-normal text-blackPrimary text-justify mt-4"
            >
              Jatri.co convenience fee is refundable only in case of trip
              cancellations by operators during non-Eid times. For Eid tickets,
              the convenience fee is non-refundable even if the operator has
              canceled the trip. This fee is also non-refundable if the
              passenger cancels the tickets due to a change of decision to
              travel.
            </p>
            <p
              class="text-base font-normal text-blackPrimary text-justify mt-4"
            >
              As per policy of an operator, Jatri.co may deduct a certain
              percentage (%) of the ticket price towards cancellation fee,
              where-ever applicable
            </p>
            <p
              class="text-base font-normal text-blackPrimary text-justify mt-4"
            >
              For refunds through mobile payment gateways (e.g. bKash, Nagad), a
              fee is charged by the mobile payment company which will be
              deducted from the eligible refund amount. Similar conditions will
              apply if the bank charges any such additional fee.
            </p>

            <p class="text-base font-bold text-blackPrimary mt-4">
              Special Circumstances:
            </p>

            <div class="ml-4 md:ml-9 mt-4">
              <ul
                class="
                  list-disc
                  leading-6
                  md:leading-5
                  text-[16px]
                  md:text-sm
                  text-blackPrimary
                  font-[300] font-inter
                "
              >
                <li>
                  If a customer has sent payment to Jatri.co but the e-ticket is
                  not confirmed or generated, i.e., there is no transaction ID
                  or tickets booked/reserved by the mobile number of the mobile
                  payment account, he can claim for refund in the similar
                  procedure as above, without the ticket number. Such refunds
                  will be given 7 business days (excluding Friday and Saturday)
                  AFTER the event/trip has taken place. This is applicable for
                  Eid times also.
                </li>

                <li>
                  If a customer has made an excess or less payment for a ticket
                  accidentally, he is eligible for refund but he must claim for
                  the refund within 24 hours of making the payment.
                </li>

                <li>
                  If a customer has reserved a ticket and made a payment,
                  however, for some reason, the ticket purchase process was not
                  successful and a ticket was not issued, a customer can claim a
                  refund as per the policy above. Ticket number, the mobile used
                  for booking and other information is required.
                </li>

                <li>
                  For refunds through mobile payment gateways (e.g. bKash or
                  Nagad), a fee is charged by the mobile payment company which
                  will be deducted from the eligible refund amount. Similar
                  conditions will apply if the bank charges any such additional
                  fee.
                </li>

                <li>
                  In case of card payments, the last 4 digits of the card type
                  of card is also needed.
                </li>

                <li>
                  In case of BKash or Nagad payments, a full mobile number will
                  be required. It is to be noted that for reasons beyond
                  Jatri.co’s control, payment may require some time to post on
                  the payment gateway’s panel which
                  <span class="font-medium">www. Jatri.co</span> uses to verify
                  payment.
                </li>
              </ul>
            </div>

            <p class="text-base font-normal text-blackPrimary mt-4">
              <span class="font-medium">Note:</span> Terms and conditions of
              refund policy might update or change from time to time or change
              without any notice.
            </p>
          </div>

          <hr id="privacy-policy" class="mt-6 border-t border-[#DBDBDB]" />
          <!-- privacy policy data -->
          <div :class="$route.hash === '#privacy-policy' ? 'mt-20' : ' '">
            <p
              class="
                mt-6
                text-blackPrimary
                leading-8
                md:leading-9
                text-2xl
                md:text-[28px]
                font-medium
                md:font-semibold
              "
            >
              Privacy Policy
            </p>

            <p
              class="text-base font-normal text-blackPrimary text-justify mt-4"
            >
              Jatri services Limited values the relationship with the customers.
              We are committed to handling customer information in a
              professional manner. We take the issue of privacy of our customers
              very seriously and want you to feel comfortable whenever they
              visit our website.
            </p>

            <p
              class="text-base font-normal text-blackPrimary text-justify mt-4"
            >
              If you provide unique identifying information, such as name,
              address and other information to us, such information may be used
              for statistical and/or other purposes. Any personally identifiable
              information you submit while booking with Jatri.co will not be
              disclosed, disseminated without your consent.
            </p>

            <p
              class="text-base font-normal text-blackPrimary text-justify mt-4"
            >
              Jatri services Ltd. may use your personal contact information such
              as Email, Mobile number to update you on any information regarding
              your travel or to update you on any offer(s).
            </p>

            <p
              class="text-base font-normal text-blackPrimary text-justify mt-4"
            >
              We want you to feel confident about using Jatri.co to plan and
              purchase your bus tickets. Your personal information is safe and
              secure with us. We have implemented appropriate administrative,
              technical, and physical security procedures to help protect the
              personal information you provide to us.
            </p>
          </div>

          <p class="text-base font-bold text-blackPrimary mt-4">
            Cancellation process:
          </p>
          <div class="ml-4 md:ml-9">
            <ul
              class="
                list-disc
                leading-6
                md:leading-5
                text-[16px]
                md:text-sm
                text-blackPrimary
                font-[300] font-inter
              "
            >
              <li>
                First, you have to go to the ticket history option. You need to
                add your phone number/PNR/transaction ID to search for your
                ticket.
              </li>

              <li>
                Click at the cancellation option. Your request will be submitted
                to our team.
              </li>

              <li>
                Your money will be refunded with following our refund &
                cancellation policy.
              </li>
            </ul>
          </div>

          <p class="text-base font-bold text-blackPrimary mt-4">
            There are few cancellation policies:
          </p>

          <div class="ml-4 md:ml-9">
            <ul
              class="
                list-disc
                leading-6
                md:leading-5
                text-[16px]
                md:text-sm
                text-blackPrimary
                font-[300] font-inter
              "
            >
              <li>
                <span class="font-medium">Auto cancellation</span>
                will happen if the customer fails to report at the reporting
                station 15 minutes before the bus arrives.
              </li>

              <li>
                If the customer
                <span class="font-medium">fails to pay</span> the full amount
                that mentioned in the screen will not get the activated tickets.
              </li>

              <li>
                To be eligible for refund, customers need to cancel the ticket
                from <span class="font-medium">‘Ticket History’</span> a day
                before<span class="font-medium"
                  >(Excluding 12:00 AM to 07:00 AM)</span
                >
                the journey time. And must report the cancellation to the
                support center (i.e Call 09642080808 or email to
                <span type="email" class="text-[#0000FF] underline"
                  >info@jatri.co</span
                >).
              </li>
              <li>
                Only <span class="font-medium">during Eid time</span>, customers
                are eligible for refund ONLY if the operator cancels the trip
                and cannot provide an alternative arrangement. (<span
                  class="font-medium"
                  >Note</span
                >: Terms and conditions of refund policy might update or change
                from time to time without any notice)
              </li>
              <li>
                <span class="font-medium">For mobile payments</span>, it is the
                responsibility of the customer to input transaction ID (if
                applicable), PIN, OTP properly within time to confirm his ticket
                by himself.
              </li>
              <li>
                Jatri.co sometimes does the verification for the customer as a
                courtesy, but it is not jatri.co’s responsibility or service
                promise.
              </li>
              <li>
                For mobile payments, customers must complete payment and also
                verify transactions.
              </li>
              <li>
                During Eid sales month, Jatri.co will not do any verification on
                behalf of the customers.
              </li>
              <li>
                If the customer faces any hassle at the counter after purchasing
                tickets from Jatri.co, then the user has to give the complaint
                to our customer service or give an email to info@jatri.co within
                3 days(72 hours) from the departure time.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>
<script>
export default {
  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
  data() {
    return {
      selectedContent: "terms-condition",
      dropDown: false,
    };
  },
  methods: {
    toggler() {
      this.dropDown = !this.dropDown;
    },
  },
};
</script>

<style  scoped>
.dash-type {
  list-style-type: "- ";
}
</style>


