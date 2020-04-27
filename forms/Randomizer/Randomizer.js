btnRandomizer.onclick=function(){
  var activity = ["Picnic in the park!","Go out to eat!","Go to a bar!","Catch a Jays game!","Take a jog and see the neighborhood!"]
  activity.push("Go to Coneflower!")
  var randomActivity = activity[Math.floor(Math.random()*activity.length)]
  txtaRandomizer.value = randomActivity
}

btnRandomHome.onclick=function(){
  ChangeForm(Home)
}
