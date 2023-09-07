import { ServiceType } from "../helpers/utils";

export default function ({ route, store }) {
  const path = route.path.toString();

  store.commit(
    "common/setSelectedService",
    path.startsWith("/launch/trip") ? ServiceType.LAUNCH : ServiceType.BUS
  );
}
