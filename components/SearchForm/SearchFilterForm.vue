<template>
    <div class="bg-white searchbar rounded-[10px] flex justify-between w-full">
        <div class="flex justify-between w-10/12">
            <SearchCityFilter
                v-model="departure"
                :defaultValue="departureName"
                :label="'From'"
                :default-option="'Choose Your Location'"
                :allow-filter="true"
                :options="getGsCities"
                :errorOccured="errorOccured"
            />
            <SearchCityFilter
                v-model="destination"
                :defaultValue="destinationName"
                :label="'To'"
                :default-option="'Choose Your Destination'"
                :allow-filter="true"
                :options="getGsCities"
                :errorOccured="errorOccured"
            />
            <SearchBusFilter
                v-model="coachType"
                :defaultValue="''"
                :label="'Bus Type'"
                :default-option="'Choose bus type'"
                :allow-filter="false"
                :options="coachTypes"
                :errorOccured="errorOccured"
            />
            <DatePicker
                v-model="departingDate"
                :label="'Select Date'"
                :default-option="'Select Journey Date'"
                :allow-filter="true"
                :errorOccured="errorOccured"
            />
        </div>
        <div class="lg:px-1 xl:px-2 2xl:px-6 lg:py-2 xl:py-[15px] w-2/12 flex justify-center">
            <button
                class="rounded-full text-white text-xs  xl:text-sm font-semibold leading-3 lg:leading-5 lg:px-[22px] xl:px-[26px] lg:py-1 xl:py-[13px]"
                :class="!departure || !destination || !coachType || !departingDate ? 'bg-corporate' : 'bg-corporate cursor-pointer'"
                @click="handleFromSubmit"
            >
                Search Ticket
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from 'js-cookie';
export default {
    data() {
        return {
        errorOccured: false,
        departure: "",
        destination: "",
        departureName: "",
        destinationName: "",
        departingDate: "",
        coachType: "all",
        // passengerName: "",
        coachTypes: [
            { city_name: "ac" },
            { city_name: "non-ac" },
            { city_name: "all" },
        ],
        //quantity: ''
        };
    },
    computed: {
        ...mapGetters("guarantedseat", ["getGsCities"]),
    },
    methods: {
        handleToastMessage(message) {
        this.$toast.error(message, {
            position: "bottom-right",
            duration: 5000,
        });
        },
        handleFromSubmit() {
            if (!this.departure) {
                this.handleToastMessage('Please insert your location');
            }
            if (!this.destination) {
                this.handleToastMessage('Please insert your destination');
            }
            if (!this.coachType) {
                this.handleToastMessage('Please insert coach type');
            }
            if (!this.departingDate) {
                this.handleToastMessage('Please insert departure date');
            }
            if(this.departure && this.destination && this.coachType && this.departingDate) {
                const query = {
                    from: this.departure,
                    to: this.destination,
                    type: this.coachType,
                    quantity: this.quantity,
                    date: new Date(this.departingDate).getTime(),
                };
                Cookies.remove('process-allow')
                this.$router.push({ path: "/trip", query });
            }
            else {
                this.errorOccured = true;
            }
        },

        // findTrips(){
        //     window.location.href = '/trip'
        // }
    },
    watch: {
        "$route.query": {
            handler: function(value) {
                const { from, to, date } = value;
                if(from) {
                    this.getGsCities.filter(s => {
                        if (s.city_name.toLowerCase() === from.toLowerCase()) {
                            this.departure = s.city_name;
                            this.departureName = s;
                        }
                    });
                }

                if(to) {
                    this.getGsCities.filter(s => {
                        if (s.city_name.toLowerCase() === to.toLowerCase()) {
                            this.destination = s.city_name;
                            this.destinationName = s;
                        }
                    });
                }

                if(date) {
                    this.departingDate = new Date(+date).toLocaleString('en-CA', {dateStyle: 'short'})
                }
                
            },
            deep: true,
            immediate: true,
        },
    },
}
</script>

<style>

</style>