
function sortByValueAndIndex(array) {
    let totals = []
    array.forEach((e, i) => {
      let totalObj = {
        total: e*(i+1),
        i: i
      }
      totals.push(totalObj)
    })
    totals.sort((a, b) => a.total - b.total)
    let newArr = []
    totals.forEach(e => newArr.push(array[e.i]))
    return newArr
  }
  
  
 
  
  console.log(sortByValueAndIndex([8,9,6,7,5]))

  