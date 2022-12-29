<template>
  <div class="relative z-[999999999]">
    <div
      class="fixed inset-0 bg-blackPrimary bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10">
      <div
        class="
          flex
          min-h-full
          items-end
          justify-center
          lg:p-4
          text-center
          lg:items-center lg:px-[100px]
        "
      >
        <div
          class="
            relative
            transform
            overflow-hidden
            lg:rounded-lg
            bg-white
            text-left
            shadow-xl
            transition-all
            w-full
          "
        >
          <div class="bg-white p-4 lg:p-6 w-full">
            <div class="flex justify-between">
              <h2 class="text-sm lg:text-xl font-medium text-blackPrimary">
                Full bus reserve
              </h2>

              <button @click="() => handlePointPolicyModal()" class="pr-[6px]">
                <img src="@/assets/images/icons/closeIcon.svg" alt="" />
              </button>
            </div>

            <div class="bg-white overflow-y-auto font-normal pt-[10px]">
              <p class="text-xl text-[#4D4D4F]">
                Now you can reserve a full bus according to your need. Fill the
                form and submit. We will check and reserve a bus for you.
              </p>
              <div
                class="
                  border border-[#DBDBDB]
                  rounded
                  h-full
                  lg:h-[598px]
                  mt-6
                  p-6
                "
              >
                <!-- First Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col lg:flex-row"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Journey date" />
                      <SelectDate />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Return date" />
                      <SelectDate />
                    </div>
                  </div>
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Boarding place" />
                      <ChooseOption label="Choose a location" />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Dropping place" />
                      <ChooseOption label="Choose a location" />
                    </div>
                  </div>
                </div>

                <!-- Second Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col lg:flex-row"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="No. of bus needed" />
                      <ChooseOption label="Select no. of bus" />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Bus type" />
                      <ChooseOption label="Select bus type" />
                    </div>
                  </div>
                  <!-- SEcond Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="No. of seats" />
                      <ChooseOption label="Select no. of seats" />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Preferred bus (if any)" />
                      <ChooseOption label="Select a bus operator" />
                    </div>
                  </div>
                </div>

                <!-- Third Row -->
                <div
                  class="flex justify-evenly gap-6 flex-col lg:flex-row mb-6"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Approximate budget" />
                      <EnterInput
                        placeholder="Enter budget amount"
                        type="number"
                      />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Comment" />
                      <EnterInput
                        placeholder="Enter your comment"
                        type="text"
                      />
                    </div>
                  </div>

                  <!-- Second Item -->
                  <div class="flex justify-evenly gap-6 w-full"></div>
                </div>

                <!-- Third Row -->
                <div
                  class="flex justify-evenly gap-6 mb-6 flex-col lg:flex-row"
                >
                  <!-- First Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Contact Person Name" />
                      <EnterInput placeholder="Enter name" type="text" />
                    </div>
                    <div class="w-full">
                      <CommonInputLabel label="Mobile No" />
                      <EnterInput
                        placeholder="Enter mobile number"
                        type="number"
                      />
                    </div>
                  </div>
                  <!-- SEcond Item -->
                  <div class="flex justify-evenly gap-6 w-full">
                    <div class="w-full">
                      <CommonInputLabel label="Email" />
                      <EnterInput placeholder="Enter email" type="email" />
                    </div>
                  </div>
                </div>

                <button
                  class="
                    flext
                    items-center
                    justify-center
                    bg-corporate
                    text-white text-sm
                    font-medium
                    h-[46px]
                    w-full
                    rounded-full
                  "
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["close", "selectedTab", "handlePointPolicyModal", "setCurrentTab"],
  data() {
    return {
      budget: null,
      comment: null,
      name: null,
      mobile: null,
      email: null,
    };
  },
  computed: {},
};
</script>
