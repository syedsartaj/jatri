import { ServiceType } from "../helpers/utils";

export default function ({ route, store }) {
  const path = route?.path?.toString();

  const isLaunchTrip = path?.startsWith("/launch/trip");
  const isBusTrip = path?.startsWith("/bus/trip");

  if (isLaunchTrip || isBusTrip) {
    const selectedService = isLaunchTrip ? ServiceType.LAUNCH : ServiceType.BUS;
    store.commit("common/setSelectedService", selectedService);
  }
}
