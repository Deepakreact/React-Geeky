// But the catch here is, every time we write a character, our API will get triggered. So going back to our example above,
//  let's say we want to type 800001. Again, as soon as we type 8, the API will be triggered and it will search the character 8.
//   Then we will type 0 (zero), and the API will search for 80, and so on.

// Now, let's change the whole flow in order to add debouncing. In the case of Debouncing,
//  the API will trigger only once after 2 seconds, after we type our whole pin-code







// Clear Timeout

// We will also need to destroy the instance of the useEffect hook using return, followed by clearTimeout,
//  every time it finishes.







import React, {useState, useEffect} from 'react'

function Debouncing2() {

    const [pinCode, setPinCode] = useState("");


   



      useEffect(() => {
        const getData = setTimeout(() => {
          axios
          .get(`https://api.postalpincode.in/pincode/${pinCode}`)
          .then((response) => {
            console.log(response.data[0]);
          });
        }, 2000)

        return () => clearTimeout(getData)
    }, [pinCode])




  return (
    <div>
    
    Debouncing2

    <input
    placeholder="Search Input.."
    onChange={(event) => setPinCode(event.target.value)}
/>
    
    </div>
  )
}

export default Debouncing2