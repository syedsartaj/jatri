<template>
  <div class="py-[16px] px-[17px] md:py-[30px] md:px-[100px]">
    <div class=" md:bg-white p-4 md:p-[40px]">
      <!--      dropdown-->
      <div class="block md:hidden bg-white">
        <button @click="toggler" class="w-full py-3 px-2 leading-5 text-sm font-medium text-blackPrimary rounded flex justify-between">Terms & Conditions
          <img src="../assets/images/ashDropDown.svg" alt="">
        </button>
        <div v-show="dropDown" class="w-full bg-[#f7f7f7] rounded p-2">
          <p class="text-base font-medium text-blackPrimary">Table of contents</p>
          <hr class="mt-2 border-t border-[#DBDBDB]">
          <a @click="selectedContent = 'terms-condition'" href="#terms-and-conditions" :class="selectedContent === 'terms-condition' ? 'text-white bg-[#1E88E5]' : 'text-black bg-transparent' " class="mt-4 block w-full  leading-5 text-sm font-medium p-2 rounded">Terms & Conditions</a>
          <a @click="selectedContent = 'return-policy'"   href="#return-and-refund-policy" :class="selectedContent === 'return-policy'  ? 'text-white bg-[#1E88E5]' : 'text-black bg-transparent' " class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded">Return & Refund Policies</a>
          <a @click="selectedContent = 'privacy-policy'"  href="#privacy-policy" :class="selectedContent === 'privacy-policy' ? 'text-white bg-[#1E88E5]' : 'text-black bg-transparent' " class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded">Privacy Policy </a>
        </div>
      </div>

      <div class="md:flex md:gap-x-[32px]">
        <div class="hidden md:block w-[300px] bg-[#F7F7F7] rounded-[14px] p-6">
          <div class="sticky top-24">
            <p class="text-base font-medium text-blackPrimary">Table of contents</p>
            <hr class="mt-2 border-t border-[#DBDBDB]">
            <a @click="selectedContent = 'terms-condition'" href="#terms-and-conditions" :class="selectedContent === 'terms-condition' ? 'text-white bg-[#1E88E5]' : 'text-black bg-transparent' "  class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded">Terms & Conditions</a>
            <a @click="selectedContent = 'return-policy'" href="#return-and-refund-policy" :class="selectedContent === 'return-policy'  ? 'text-white bg-[#1E88E5]' : 'text-black bg-transparent' " class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded">Return & Refund Policies</a>
            <a @click="selectedContent = 'privacy-policy'" href="#privacy-policy" :class="selectedContent === 'privacy-policy' ? 'text-white bg-[#1E88E5]' : 'text-black bg-transparent' " class="mt-4 block w-full leading-5 text-sm font-medium p-2 rounded">Privacy Policy </a>
          </div>
        </div>
        <div id="terms-and-conditions" class="w-full mt-10">
          <div class="bg-white p-4">
            <p class="text-blackPrimary leading-8 md:leading-9 text-2xl md:text-[28px] font-medium md:font-semibold">Terms & Conditions</p>
            <p class="text-blackPrimary text-xl font-medium mt-4 md:mt-8">General Terms:</p>
            <div class="ml-4 md:ml-9">
              <ul class="list-disc mt-2 md:mt-4 leading-6 md:leading-5 text-[16px] md:text-sm text-blackPrimary font-[300] font-inter">
                <li class="">The ticket will be treated as cancelled if passenger fails to report at the reporting
                  station before the departure schedule.</li>
                <li>The authority reserves the rights to change schedule/seat # in case of emergency
                  requirements.</li>
                <li>The authority will not be held responsible for any illegal goods carrying by the
                  passenger.</li>
                <li>Passenger may cancel his/her tickets prior to 12 hours from the time of journey from
                  Jatri Online.</li>
                <li>Each of the passengers may carry 15 KG of goods with them. More than 15 KG may be carried by paying extra change BDT</li>
              </ul>
            </div>
            <p class="text-blackPrimary text-xl font-medium mt-4 md:mt-8">Other Terms:</p>
            <p class="mt-4 leading-5 text-sm font-normal text-blackPrimary">Jatri.co is only the ticket reseller. It does not operate bus/cruise services of its own. Jatri.co advice to customers to choose bus/cruise operators they are aware of and
              whose service they are comfortable with.
            </p>

            <p class="text-blackPrimary text-xl font-medium mt-4 md:mt-8">Jatri.co' responsibilities include:
            </p>
            <div class="ml-4 md:ml-9">
              <ul class="list-disc mt-2 md:mt-4 leading-6 md:leading-5 text-[16px] md:text-sm text-blackPrimary font-[300] font-inter">
                <li class="">Issuing a valid e-ticket (a ticket that will be accepted by the bus/cruise operators) for its'
                  network of operations.
                </li>
                <li>Providing customer support and information regarding ticket availability and online purchase.</li>
              </ul>
            </div>

            <p class="text-blackPrimary text-xl font-medium mt-4 md:mt-8">Jatri.co' responsibilities do NOT include:
            </p>
            <div class="ml-4 md:ml-9">
              <ul class="list-disc mt-2 md:mt-4 leading-6 md:leading-5 text-[16px] md:text-sm text-blackPrimary font-[300] font-inter">
                <li>The bus/cruise operator changing ticket price.
                </li>
                <li>The bus/cruise not departing / reaching on time.</li>
                <li>The bus/cruise seats etc. not being up to the customer's expectation.</li>
                <li>The bus/cruise operator cancelling the trip due to unavoidable reasons.</li>
                <li>The baggage of the customer getting lost/ stolen/damaged.</li>
                <li>The bus/cruise operator changing a customer's seat at the last minute to accommodate a
                  lady/child/patient or any other reason.</li>
                <li>The customer waiting at the wrong boarding point (please call the bus operator to find out
                  the exact boarding point) boarding point if you are not a regular traveler on that particular
                  bus/cruise.</li>
                <li>The bus/cruise operator changing the boarding point and/or using a pick-up vehicle at the
                  boarding point to take customers to the bus/cruise departure point.</li>
              </ul>
            </div>
            <p class="mt-4 text-base font-normal text-blackPrimary">The departure times mentioned on the ticket are only tentative timings. However the
              bus/cruise will not leave the source before the time that is mentioned on the ticket.</p>

            <p class="text-blackPrimary text-xl font-medium mt-4 md:mt-8">Passengers are required to furnish the following at the time of boarding the bus:
            </p>
            <div class="ml-4 md:ml-9">
              <ul class="list-disc mt-2 md:mt-4 leading-6 md:leading-5 text-[16px] md:text-sm text-blackPrimary font-[300] font-inter">
                <li>A copy of the ticket (A print out of the e-ticket or the print out of the ticket provided on
                  website or SMS confirmation. Failing to do so, they may not be allowed to board the
                  bus/cruise.
                </li>
              </ul>
            </div>
            <p class="text-base font-normal text-blackPrimary mt-4">Cancellation Policy:</p>
            <p class="text-base font-normal text-blackPrimary mt-4">The tickets booked through Jatri.co are only cancellable from
              Jatri Online as per Cancellation Policy.</p>

            <p class="text-base font-medium text-blackPrimary mt-4">Please note that the cancellation fee and cancellation period may differ from one
              bus/cruise operator to another. Please follow the terms mentioned in e-tickets.</p>
            <p class="text-base font-normal text-blackPrimary mt-4">If purchase confirmation email/SMS gets delayed or fails because of technical reasons
              or as a result of incorrect ID / phone number provided by the user etc. a ticket will be
              considered 'purchased' as long as the ticket shows up on the confirmation page of
              www.jatri.co If the E-mail/SMS is not received then please calls our customer case
              or emails us to support@jatri.co for confirmation.</p>
            <p class="text-base font-normal text-blackPrimary mt-4">Email/SMS service will not apply to customers purchasing tickets at the respective
              bus/cruise counters. It will apply for purchase through online and our agent points and
              purchasing through call centre.</p>
            <p class="text-base font-normal text-blackPrimary mt-4">Passenger cannot claim www.jatri.co liable for any situation, occurrence etc. happen
              due to failure of any responsibility of passenger or the bus/cruise operators.</p>
            <p class="text-base font-normal text-blackPrimary mt-4">www.jatri.co holds the right to update or change any terms time to time without any
              prior notice.</p>
            <p class="text-base font-normal text-blackPrimary mt-4">Any kind of ticket cancellation might not be allowed during Public Holidays journey
              as per bus company decision.</p>
            <p class="text-base font-normal text-blackPrimary mt-4">Tickets of international routes are not allowed for cancel, refund or change.</p>
            <p class="text-base font-normal text-blackPrimary mt-4">No change, no cancel from 2022-04-27 to 2022-05-08 journey date tickets due to Eid.</p>

            <p class="text-base font-medium text-blackPrimary mt-4">Eid Notice:</p>

            <p class="text-base font-normal text-blackPrimary mt-4">EID TICKETS ARE NON REFUNDABLE AND CAN NOT BE CHANGES.
              DUE TO UNAVOIDABLE CIRCUMSTANCES (i.e MECHANICAL FAILURE OR
              WORST TRAFFIC JAM), SCHEDULE MIGHT BE DELAYED. IN SUCH CONDITION
              JATRI.CO OR HIS BUS/CRUISE OPERATORS WILL NOT BE RESPONSIBLE
              IF ANY TRIP IS CANCELLED, PASSENGER WILL GET REFUND ONLY COUNTER
              FARE PRICE. JATRI.CO ONLINE RANSACTION FEES WILL BE DEDUCTED
              FROM TOTAL PAID AMOUNT AND WILL NOT BE REFUNDED.</p>

            <div class="mt-6">
              <p class="text-base font-normal text-blackPrimary">For more queries email us: <span class="font-medium">support@jatri.co</span></p>
              <p class="text-base font-normal text-blackPrimary"> Call us <span class="font-medium">@ 09642080808</span></p>
            </div>

            <hr class="mt-6 border-t border-[#DBDBDB]">

            <div id="return-and-refund-policy">
              <p class="mt-6 text-blackPrimary leading-8 md:leading-9 text-2xl md:text-[28px] font-medium md:font-semibold">Return & Refund Policies</p>
              <p class="text-base font-normal text-blackPrimary mt-4">Before buying a ticket, customers are requested to read the following
                cancellation and refund policies carefully.</p>
              <p class="text-base font-medium text-blackPrimary mt-4">Cancellation Policy:</p>
              <p class="text-base font-normal text-blackPrimary">Tickets bought through Jatri.co can be cancelled as per the cancellation policy below.
                However, as a ticket selling agent, Jatri.co is bound to comply with the terms set by the
                operator/event organizer/vendor whose ticket it is selling. So, if the operator/event organizer
                denies refund even though claim was made within the terms mentioned here, Jatri.co will be
                unable to issue such refund.</p>

              <p class="text-base font-medium text-blackPrimary mt-4">Auto Cancellation:</p>
              <p class="text-base font-normal text-blackPrimary">The ticket will be treated as cancelled if passenger fails to report at the reporting station
                before the departure schedule.</p>

              <p class="text-base font-medium text-blackPrimary mt-4">Failure to Pay:</p>
              <p class="text-base font-normal text-blackPrimary">No ticket will be activated unless the customer has paid the full amount mentioned on the
                screen.</p>
              <p class="text-base font-normal text-blackPrimary">For mobile payments, it is the responsibility of the customer to input transaction ID (if
                applicable), PIN, OTP properly within time to confirm his ticket by himself. Jatri.co
                sometimes does the verification for the customer as a courtesy, but it is not jatri.co’s
                responsibility or service promise.</p>

              <p class="text-base font-normal text-blackPrimary">Tickets will be automatically cancelled if customer does not confirm payment within 30
                minutes. For mobile payments customer must complete payment and also verify transaction
                within this stipulated time. During Eid sales month, Jatri.co will not do any verification on
                behalf of the customers.</p>

              <p class="text-base font-medium text-blackPrimary mt-4">Ticket cancellation eligibility:</p>
              <p class="text-base font-medium text-blackPrimary mt-4">Regular Time (Non-Eid Period):</p>

              <p class="text-base font-medium text-blackPrimary mt-4">To be eligible for refund, customer needs to cancel the ticket from jatri.co before the
                applicable time before the departure. And must report the cancelation to the support centre
                (i.e. Call 09642080808 or email to support@jatri.co) of Jatri.co</p>
              <!--table-->
              <div class="mt-4 border border-[#DBDBDB] rounded">
                <table class="min-w-full text-center">
                  <thead>
                  <tr class="bg-[#F7F7F7] p-1 leading-[16px] md:leading-6 text-[12px] md:text-[16px] font-medium">
                    <th class="p-1 md:p-4 border-r border-[#DBDBDB]">Operator</th>
                    <th class="p-1 md:p-4 border-r border-[#DBDBDB]">Hours before trip time</th>
                    <th class="p-1 md:p-4">Remarks</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="leading-[16px] md:leading-6 text-[12px] md:text-[16px] font-medium">
                    <td class="p-1 md:p-4 border-r border-[#DBDBDB]">Jatri Online</td>
                    <td class="p-1 md:p-4 border-r border-[#DBDBDB]">12 hours</td>
                    <td class="p-1 md:p-4 border-r border-[#DBDBDB]">Excluding 12:00 AM to 06:00 AM</td>
                  </tr>
                  </tbody>
                </table>
              </div>


              <p class="text-base font-medium text-blackPrimary mt-4">During Eid:</p>
              <p class="text-base font-normal text-blackPrimary">For Eid tickets, customers are eligible for refund ONLY if the operator cancels the trip and
                cannot provide an alternative arrangement.</p>
              <p class="text-base font-normal text-blackPrimary">Customers MUST claim refund at the operator’s counters in case of trip cancellation.</p>
              <p class="text-base font-normal text-blackPrimary">Customer must claim refund from bus operator’s counter before trip time.</p>

              <p class="text-base font-medium text-blackPrimary mt-4">Refund Policy</p>
              <p class="text-base font-medium text-blackPrimary mt-4">Regular Time (Non-Eid Period):</p>

              <p class="text-base font-normal text-blackPrimary">No ticket will be refunded unless it has been cancelled as per the cancellation policy above.
                In case of technical problem or any failed transaction due to network failure, time delay on
                complete payment, input transaction ID/validation of transaction (in case of mobile payment)
                or any other situation where payment is successful but ticket is not generated on that case, no
                refunds will be processed without a written request in the correct format (as outlined below)
                sent to support@ Jatri.co within the timeframe requirement given above.</p>

              <p class="text-base font-medium text-blackPrimary mt-4">Refund Request Format:</p>
              <div class="ml-4 md:ml-9">
                <ul class="list-disc mt-2 md:mt-4 leading-6 md:leading-5 text-[16px] md:text-sm text-blackPrimary font-[300] font-inter">
                  <li>Ticket # (required if a ticket was issued).
                  </li>
                  <li>Mobile number used while buying the ticket.</li>
                  <li>Category (e.g. Bus/Cruise).</li>
                  <li>Date of payment.</li>
                  <li>Method of Payment (e.g., bkash, card etc).</li>
                  <li>Mobile payment trxID (for mobile payments).</li>
                  <li>Where refund should be given to: Personal bKash Number (If paid through bkash) OR
                    Bank details (if paid through card/online baking/DBBL mobile banking) with Account
                    Number, Bank Account Name, Bank Name, Branch Name and Routing Code.</li>
                  <li>No cash refund given.</li>
                  <li>Upon receiving refund requests accurately in the format outlined above, Jatri.co will
                    process refund within 15 business days (excluding holidays / weekends), subject to
                    verification by the transportation operator/event organizer.</li>
                  <li>For clarity, timing commitment starts from the time of receiving the ACCURATE
                    information, mistakes will cause delays</li>
                  <li>Further if the operator/event organizer takes time to verify eligibility or denies refund,
                    Jatri.co will not be able to fulfil the request</li>
                  <li>In case of payments through bKash, credit card, debit card or internet banking, after
                    Jatri.co processes the refund, the payment gateway or bank may take up to 1 week to
                    2 weeks to credit the amount to customer account, which is beyond Jatri.co’s
                    responsibility. Once Jatri.co has processed the refund, customers are requested to
                    enquire at their respective bank(s) about the status of the refund.</li>
                </ul>
              </div>

              <p class="text-base font-medium text-blackPrimary mt-4">Amount of Refund:</p>
              <p class="text-base font-normal text-blackPrimary">Fees charged by payment gateways, credit / debit cards, mobile payment gateways (e.g.
                bKash) are non-refundable due to the policies of the respective organizations, which is
                beyond Jatri.co's control.</p>
              <p class="text-base font-normal text-blackPrimary">Jatri.co convenience fee is refundable only in case of trip cancellations by operators during
                non-Eid times. For Eid tickets, convenience fee is non-refundable even if the operator has
                cancelled the trip. This fee is also non-refundable if the passenger cancels the tickets due to a
                change of decision to travel.</p>
              <p class="text-base font-normal text-blackPrimary">As per policy of an operator, Jatri.co may deduct a certain percentage (%) of the ticket price
                towards cancellation fee, where-ever applicable.</p>
              <p class="text-base font-normal text-blackPrimary">For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile
                payment company which will be deducted from the eligible refund amount. Similar condition
                will apply if the bank charges any such additional fee.</p>

              <p class="text-base font-medium text-blackPrimary mt-4">Special Circumstances:</p>
              <p class="text-base font-normal text-blackPrimary">If a customer has sent payment to Jatri.co but the e-ticket is not confirmed or generated, i.e.,
                there is no transaction ID or tickets booked/reserved by the mobile number of the mobile
                payment account, he can claim for refund in the similar procedure as above, without the
                ticket number. Such refunds will be given 7 business days (excluding Friday and Saturday)
                AFTER the event/trip has taken place. This is applicable for Eid times also.</p>

              <p class="text-base font-normal text-blackPrimary">If a customer has made an excess or less payment for a ticket accidentally, he is eligible for
                refund but he must claim for the refund within 24 hours of making the payment
                If a customer has reserved a ticket and made a payment, however, for some reason, the ticket
                purchase process was not successful and a ticket was not issued, a customer can claim refund
                as per the policy above. Ticket number is not required, but mobile # used for booking and
                other information is required.</p>

              <p class="text-base font-normal text-blackPrimary">For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile
                payment company which will be deducted from the eligible refund amount. Similar condition
                will apply if the bank charges any such additional fee.</p>

              <p class="text-base font-normal text-blackPrimary">In case of card payments, last 4 digits of the card, type of card is also needed. It is to be noted
                that for reasons beyond Jatri.co’s control, card payment may sometimes require time to post
                on the payment ateway’s panel which Jatri.co uses to verify payment. Jatri.co can only
                verify payment after it has been posted on the said panel.</p>

              <p class="text-base font-normal text-blackPrimary">In case of BKash payments, full mobile number will be required. It is to be noted that for
                reasons beyond Jatri.co’s control, payment may require some times to post on the payment
                gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after
                it has been posted on the said panel.</p>

              <p class="text-base font-normal text-blackPrimary"> <span class="font-medium">Note:</span> Terms and conditions of refund policy might time to time update or
                changed without any notice.</p>

              <hr class="mt-2 border-t border-[#DBDBDB]">

              <div id="privacy-policy">
                <p class="mt-6 text-blackPrimary leading-8 md:leading-9 text-2xl md:text-[28px] font-medium md:font-semibold">Privacy Policy</p>

                <p class="text-base font-normal text-blackPrimary">Jatri services Ltd., values the relationship with the customers. We are committed to handle
                  customer information in a professional manner. We take the issue of privacy of our customers
                  very seriously and want you to feel comfortable whenever they visit our website.</p>

                <p class="text-base font-normal text-blackPrimary">We need certain information about you to accessing this Site, such as Internet protocol (IP)
                  addresses, navigation through the Site, the systems and programs used and the time spent,
                  along with other similar information, may be stored on our servers or 3rd party servers like
                  Google Analytics etc. Such stored information may not specifically identify you. Please be
                  informed that we for web site traffic analysis or for such other purposes may use the same as
                  we may deem appropriate.</p>

                <p class="text-base font-normal text-blackPrimary">If you provide unique identifying information, such as name, address and other information
                  to us, such information may be used for statistical and/or other purposes. Any personally
                  identifiable information you submit while booking with Jatri.co will not be disclosed,
                  disseminated without your consent.</p>

                <p class="text-base font-normal text-blackPrimary">Jatri services Ltd. may use your personal contact information such as Email, Mobile number
                  to update you on any information regarding your travel or to update you on any offer(s).</p>

                <p class="text-base font-normal text-blackPrimary">We want you to feel confident about using Jatri.co to plan and purchase your bus tickets.
                  Your personal information is safe and secure with us. We have implemented appropriate
                  administrative, technical, and physical security procedures to help protect the personal
                  information you provide to us.</p>
              </div>
            </div>
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
  data(){
    return{
      selectedContent: 'terms-condition',
      dropDown: false,
    }
  },
  methods:{
    toggler(){
      this.dropDown = !this.dropDown
    },
  },
}
</script>
