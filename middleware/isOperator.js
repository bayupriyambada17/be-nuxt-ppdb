export default function ({ $auth, redirect }) {

  //check loggedIn "false"
  if (!$auth.loggedIn) {
    return redirect('/')
  }

  if ($auth.strategy.name != "laravelSanctum") {
    return redirect('/')
  } else {
    return;
  }

}
