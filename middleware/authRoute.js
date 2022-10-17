export default function ({ store, redirect, route }) {
  const requestedPath = route.fullPath;
  if(store.getters['user/getToken']) {

  } else {
    store.commit("user/CALLBACK_URL", requestedPath)
    return redirect('/')
  }

}
