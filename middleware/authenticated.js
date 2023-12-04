export default function ({ $auth, redirect }) {

  if ($auth.loggedIn) {
    if ($auth.strategy.name == "ppdb") {
      return redirect('/dashboard')
    }
  }
  // if ($auth.loggedIn) {
  //   if ($auth.strategy.name == "laravelSanctum") {
  //     return redirect('/dashboard')
  //   }
  // }
}
