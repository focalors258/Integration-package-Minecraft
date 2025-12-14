let mobWater = (event) => {


  if (event.source.actual.type === "irons_spellbooks.ascension") {
    return 3
  } else if (event.source.actual.type === "irons_spellbooks.thunderstorm") {//根据类型返回附着层数
    return 2
  } else if (event.source.actual.type === "irons_spellbooks.ball_lightning") {
    return 1
  }



  return false


}