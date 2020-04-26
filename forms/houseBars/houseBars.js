var query = ""
var req = ""
var results = ""

houseBars.onshow=function(){
  txtaBars_contents.style.height = "100px"
}

btnBars.onclick=function(){
  query = "SELECT * FROM bars"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=srm08530&pass=" + "Redlodge2115" + "&database=375groupb3&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    if(results.length == 0)
      NSB.MsgBox("There are no bars.")
    else {
      let message = ""
      for (i = 0; i <= results.length - 1; i++)
        message = message + results[i][1] + "\n"
        txtaBars.value = message
    }
  } else
    NSB.MsgBox("Error code: " + req.status)
}
