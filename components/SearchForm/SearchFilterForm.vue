<template>
    <div class="bg-white searchbar rounded-[10px] flex justify-between">
        <div class="flex justify-between divide-x w-10/12">
            <SearchCityFilter
                v-model="departure"
                :defaultValue="departureName"
                :label="'From'"
                :default-option="'Choose your location'"
                :allow-filter="true"
                :options="getGsCities"
            />
            <SearchCityFilter
                v-model="destination"
                :defaultValue="destinationName"
                :label="'To'"
                :default-option="'Choose your destination'"
                :allow-filter="true"
                :options="getGsCities"
            />
            <SearchBusFilter
                v-model="coachType"
                :defaultValue="''"
                :label="'Bus Type'"
                :default-option="'Choose bus type'"
                :allow-filter="false"
                :options="coachTypes"
            />
            <DatePicker
                v-model="departingDate"
                :label="'Select Date'"
                :default-option="'Select Journey Date'"
                :allow-filter="true"
            />
        </div>
        <div class="px-6 py-[15px] w-2/12 flex justify-center">
            <button
                class="rounded-full text-white text-sm font-semibold leading-5 py-[13px] px-[26px]"
                :class="!departure || !destination || !coachType || !departingDate ? 'bg-corporate' : 'bg-corporate cursor-pointer border border-primary'"
                :disabled="!departure || !destination || !coachType || !departingDate"
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
        departure: "",
        destination: "",
        departureName: "",
        destinationName: "",
        departingDate: new Date(),
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
        handleFromSubmit() {
            const query = {
                from: this.departure,
                to: this.destination,
                type: this.coachType,
                quantity: this.quantity,
                date: new Date(this.departingDate).getTime(),
            };
            Cookies.remove('process-allow')
            this.$router.push({ path: "/trip", query });
        },

        // findTrips(){
        //     window.location.href = '/trip'
        // }
    },
    watch: {
        "$route.query": {
            handler: function(value) {
                const { from, to } = value;
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
            },
            deep: true,
            immediate: true,
        },
    },
}
</script>

<style>

</style>