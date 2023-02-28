
//To gettimestamp
let now = Date.now()
let now2 = new Date().getTime()

// To convert timestamp to date object
const date = new Date(now)

// To get date object
const date2 = new Date()




const darr = [1671424613627, 1671422613627, 1671422613627, 1671422513627, 1671422613627, 1671422613627, 1621422613627, 1671422913627, 1671422713627, 1671422613627, ]


for (let d of darr.sort()){
    

 const dateFormat = new Date(d)
  
     console.log(now)
     console.log(now2) 
     console.log(date2)
     console.log(dateFormat)
     console.log("local "+date.toLocaleString())
	console.log("time "+date.toTimeString())

  
console.log("Date: "+ dateFormat.getDate()+
           "/"+(dateFormat.getMonth()+1)+
           "/"+dateFormat.getFullYear()+
           " "+dateFormat.getHours()+
           ":"+dateFormat.getMinutes()+
           ":"+dateFormat.getSeconds());
}




	console.log(date.getDay()) // 0 sunday to 6 saturday
	console.log(date.getDate()) // Days from 0 to 31
	console.log(date.getMonth()) // 0 janusary to 11 December
	console.log(date.getYear()) // from 1900
	console.log(date.getFullYear())
	// set to change time
	console.log(date.setDate(14)) //output in ms
	console.log(date) //changes date and i have to console.log date to see the output
	console.log(date.setMonth(10))
	console.log(date)

	console.log( date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() );


	// to store dates from date picker to avoid The specified value  does not conform to the required format, "yyyy-MM-dd" error
const savedDate = new Date().toISOString().slice(0, 10)
const updatedSavedDate = new Date(e.target.value).toISOString().slice(0, 10)
