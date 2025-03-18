<script>
import bankList from "@/static/emi.json"
import Dropdown from 'primevue/dropdown';
export default {
  data() {
    return {
      bankList: bankList,
      selectedBankName: bankList[0].bankName,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  },
  computed: {
    selectedBank(){
      return this.bankList.find(bank => bank.bankName === this.selectedBankName)
    }
  },
  components: {
    Dropdown
  }
};
</script>

<template>
  <div class="relative z-[999999999]">
    <div class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"></div>

    <div class="fixed inset-0 z-10 md:p-4 flex md:items-center justify-center">
      <div class="relative transform overflow-hidden md:rounded-lg bg-white shadow-xl transition-all xl:w-[70%]">
          <div>
            <div class="sticky top-0">
              <div @click="closeModal" class="p-4 bg-[#FEF2F0] flex items-center gap-x-4 cursor-pointer md:hidden">
                <img src="@/assets/images/icons/leftArrow.svg" alt="back to payment">
                <h4 class="text-blackPrimary font-medium">Back to Payment details</h4>
              </div>

              <div class="p-4 lg:p-6 flex justify-center md:justify-between pb-4 border-b border-[#EDEDED]">
                <h2 class="text-xl font-medium text-blackPrimary">
                  EMI details
                </h2>
                <button @click="closeModal" class="pr-[6px] hidden md:block">
                  <img src="@/assets/images/icons/close-circle.png" alt="close modal" />
                </button>
              </div>
            </div>

            <div class="p-4 lg:p-6 space-y-4 max-h-[83vh] md:max-h-[80vh] overflow-y-auto">
              <div>
                <h4 class="text-blackPrimary font-medium">Select Bank</h4>
                <p class="mt-0.5 mb-4 text-[11px] text-[#4D4D4F]">Select your credit card's bank</p>
                <Dropdown class="w-full" v-model="selectedBankName" :options="bankList" optionValue="bankName" optionLabel="bankName" />
              </div>
              <div>
                <h4 class="mb-4 text-blackPrimary font-medium">Breakdown</h4>
                <div>
                  <table>
                    <thead>
                    <tr>
                      <th>Months</th>
                      <th>Monthly EMI</th>
                      <th>Total Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr v-for="emi in selectedBank.data" :key="JSON.stringify(emi)">
                        <td>{{ emi.months }}</td>
                        <td>{{ emi.monthlyEMI }}</td>
                        <td>{{ emi.totalCost }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 class="mb-2 text-blackPrimary font-medium">How EMI Works</h4>
                <div class="space-y-3 text-[#4D4D4F] text-xs leading-5">
                  <p>
                    EMI (Equated Monthly Installment) allows customers to pay for their services in easy, equal monthly installments.
                    Jatri now offers a flexible EMI option for credit card users, allowing payments to be spread over 3 to 36 months for bus ticket bookings,
                    car rentals, and flight tickets.<br>
                    The best part? You can enjoy your trips now and pay later in smaller, manageable amounts—no need to wait or compromise on your travel plans!
                  </p>

                  <p>The duration and extent of the EMI options available will be visible on the payment page after order placement.
                    EMI plans are also viewable on the checkout page in the EMI Banner below the bill section.
                  </p>
                </div>
              </div>

              <div>
                <h4 class="mb-2 text-blackPrimary font-medium">Terms & Conditions</h4>
                <div class="space-y-3 text-[#4D4D4F] text-xs leading-5">
                  <ul class="list-decimal pl-4">
                    <li>EMI is available for Online Bus Ticketing, Car Rental, and Flight Bookings on Jatri.</li>
                    <li>The minimum billing amount to avail of the EMI facility is BDT 5,000.</li>
                    <li>EMI is applicable only for eligible credit cards issued by selected banks.</li>
                    <li>Depending on the issuing bank, customers can choose EMI plans for up to 36 months.</li>
                    <li>It may take 3 to 5 working days for the installment plan to reflect on your credit card statement, depending on your bank.</li>
                    <li>Upon transaction, the full amount will be blocked on your credit card until the installment payments are completed.</li>
                    <li>A Convenience Fee may apply based on the EMI tenure. This fee is non-refundable.</li>
                    <li>Jatri will follow the policies of the respective bank/payment service provider to resolve any disputes or issues.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 class="mb-2 text-blackPrimary font-medium">FAQs</h4>
                <div class="text-[#4D4D4F] text-xs leading-[18px]">
                  <ul class="list-decimal pl-4">
                    <li>
                      What credit cards are eligible?<br>
                      - EMI is available for credit cards issued by selected banks. The transaction amount must be BDT 5,000 or higher to qualify for bus tickets.
                    </li>
                    <li>
                      Can I use a debit card for EMI?<br>
                      - No, debit card transactions are not eligible for EMI, as per bank policy.
                    </li>
                    <li>Is there any additional charge for EMI?<br>
                      - Jatri offers EMI without additional charges, only the EMI interest percentage will be applicable.
                    </li>
                    <li>What are the available EMI tenures?<br>
                      - You can select from 3 to 36 months based on the terms set by your credit card issuer.
                    </li>
                    <li>Do I need to submit any physical documents for EMI processing?<br>
                      - No, this is a completely online process. No physical documents are required.
                    </li>
                    <li>Can I settle my EMI early?<br>
                      - Yes, but early settlement policies vary by bank. Please contact your card-issuing bank for details on early settlement fees and procedures.
                    </li>
                    <li>Is EMI available for international credit cards?<br>
                      - No, EMI is only available for credit cards issued in Bangladesh.
                    </li>
                    <li>What is the refund policy for EMI transactions?<br>
                      - If a refund is processed, the EMI charge will be deducted from the refundable amount.
                    </li>
                    <li>What should I do if my purchase has not been converted to EMI within 7 working days?<br>
                      - For such issues or concerns, please contact your card-issuing bank directly, as they are responsible for processing the EMI conversion.
                    </li>
                    <li>What should I do if I face any issues?<br>
                      - If you encounter any issues or queries, feel free to contact us:
                    </li>
                  </ul>

                  <div>
                    <p>📞 Hotline: <a href="tel:09642080808">09642080808</a></p>
                    <p>📧 Email: <a href="mailto:info@jatri.co">info@jatri.co</a></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<style scoped>
  table {
    @apply w-full border-collapse
  }

  thead tr th {
    @apply w-[33.33%] p-2.5 font-medium text-blackPrimary text-center text-sm md:text-base;
  }

  tbody tr td {
    @apply p-2.5 border-r-2 border-white font-normal text-sm text-blackLight text-left;
  }

  tbody tr:nth-child(odd) td {
    @apply bg-[#EDEDED];
  }

  tbody tr:nth-child(even) td {
    @apply bg-[#DBDBDB];
  }
</style>
