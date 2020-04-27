btnNewBar.onclick=function(){
  let barName = inptBarName.value
  let barType = inptBarType.value
  let query = "INSERT INTO bars (name,classification) VALUES ('" + barName + "', '" + barType + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=srm08530&pass=" + "Redlodge2115" + "&database=375groupb3&query=" + query)
  if (req.status == 200) {
    if (req.responseText == 500) {
      var result = JSON.parse(req.responseText)
      NSB.MsgBox("You have successfully added your new bar!")
    } else
      NSB.MsgBox("The bar could not be added to the database.")
      /*NOTE: DO NOT ENTER DATA INTO INPUT IF IT HAS AN APOSTROPHE. CODE WILL NOT RUN.*/
  } else {
    NSB.MsgBox("Error: " + req.status);
  }
}

btnInsertBarHome.onclick=function(){
  ChangeForm(Home)
}
