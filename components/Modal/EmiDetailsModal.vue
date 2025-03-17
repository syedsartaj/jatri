<script>
import bankList from "@/static/emi.json"
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
  }
};
</script>

<template>
  <div class="relative z-[999999999]">
    <div class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"></div>

    <div class="fixed inset-0 z-10 p-[11px] lg:p-0 flex items-center justify-center">
      <div class="relative transform overflow-hidden rounded-lg p-4 lg:p-6 bg-white shadow-xl transition-all w-[70%]">
          <div>
            <div class="flex justify-between pb-4 border-b border-[#EDEDED]">
              <h2 class="text-xl font-medium text-blackPrimary">
                EMI details
              </h2>
              <button @click="closeModal" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="close modal" />
              </button>
            </div>

            <div class="pt-4 pr-4 space-y-4 max-h-[80vh] overflow-y-auto">
              <div>
                <h4 class="text-blackPrimary font-medium">Select Bank</h4>
                <p class="mt-0.5 mb-4 text-[11px] text-[#4D4D4F]">Select your credit card's bank</p>
                <select v-model="selectedBankName" name="cars" id="cars" class="outline-none border border-[#8FC4F2] rounded-lg w-full py-2 px-4 text-sm">
                  <option v-for="bank in bankList" >{{ bank.bankName }}</option>
                </select>
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
                      <tr v-for="emi in selectedBank.data">
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
                    <li>EMI is available for Online Bus Ticketing, Car Rental, and Flight Bookings on Jatri.</li>
                    <li>EMI is available for Online Bus Ticketing, Car Rental, and Flight Bookings on Jatri.</li>
                    <li>EMI is available for Online Bus Ticketing, Car Rental, and Flight Bookings on Jatri.</li>
                    <li>EMI is available for Online Bus Ticketing, Car Rental, and Flight Bookings on Jatri.</li>
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
                      What credit cards are eligible?<br>
                      - EMI is available for credit cards issued by selected banks. The transaction amount must be BDT 5,000 or higher to qualify for bus tickets.
                    </li>
                    <li>
                      What credit cards are eligible?<br>
                      - EMI is available for credit cards issued by selected banks. The transaction amount must be BDT 5,000 or higher to qualify for bus tickets.
                    </li>
                    <li>
                      What credit cards are eligible?<br>
                      - EMI is available for credit cards issued by selected banks. The transaction amount must be BDT 5,000 or higher to qualify for bus tickets.
                    </li>
                    <li>
                      What credit cards are eligible?<br>
                      - EMI is available for credit cards issued by selected banks. The transaction amount must be BDT 5,000 or higher to qualify for bus tickets.
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
    @apply w-[33.33%] p-2.5 font-medium text-blackPrimary text-center;
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
