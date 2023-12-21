import React, { useEffect, useState } from "react";
import "./userpage.css";
import pic1 from "../img/Warningimg.jpg";
import axios from "axios";

const Userpage = () => {
  const [initialprice, setInitialPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Retrieve the data value from localStorage
    const storedData = localStorage.getItem("data");
    console.log("Stored Data:", storedData);

    // Parse the data as an object
    const parsedData = JSON.parse(storedData) || {};
    console.log("Parse=>", parsedData);
    // Extract the values from the parsed data
    const { initialprice, total } = parsedData;

    // Update the states with the retrieved values
    setInitialPrice(initialprice);
    console.log(initialprice);
    setTotal(total);
    console.log(total);
  }, []);

  // Taking the inputs from User page
  const [salutation, setSalutation] = useState("Mr");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");
  const [occupation, setOccupation] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [preExistingDiseases, setPreExistingDiseases] = useState([]);
  const [treatmentConsulted, setTreatmentConsulted] = useState([]);

  const handleCheckboxChange = (e, stateUpdater) => {
    const { value, checked } = e.target;
    stateUpdater((prevData) =>
      checked ? [...prevData, value] : prevData.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your validation logic here
    if (
      !fullName ||
      !dob ||
      !mobile ||
      !email ||
      !address ||
      !city ||
      !pincode
    ) {
      alert("Invalid input. Please fill in all required fields.");
      return;
    }

    const formData = {
      salutation,
      fullName,
      dob,
      weight,
      heightFeet,
      heightInch,
      occupation,
      mobile,
      email,
      address,
      city,
      pincode,
      preExistingDiseases,
      treatmentConsulted,
    };

    try {
      // Make a POST request using Axios to store data in the database
      await axios.post("http://localhost:3000/policyholder", formData);
    
      // Reset the form after successful submission
      setSalutation("Mr");
      setFullName("");
      setDob("");
      setWeight("");
      setHeightFeet("");
      setHeightInch("");
      setOccupation("");
      setMobile("");
      setEmail("");
      setAddress("");
      setCity("");
      setPincode("");
      setPreExistingDiseases([]);
      setTreatmentConsulted([]);

      console.log("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <div id="mainpage">
        <div id="firstblock">
          <div id="form">
            <form onSubmit={handleSubmit}>
              <div id="firstrowinputs">
                <div id="input1">
                  <label>Salutation</label>
                  <br />
                  <select
                    name="salutation"
                    value={salutation}
                    onChange={(e) => setSalutation(e.target.value)}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>

                <div id="input2">
                  <label>Full Name</label>
                  <br />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

              <div id="secondrowinputs">
                <div id="input3">
                  <label>Date of Birth</label>
                  <br />
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <div id="input4">
                  <label>Weight (in kgs)</label>
                  <br />
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>

                <div id="input5">
                  <label>Height in feet</label>
                  <br />
                  <input
                    type="number"
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(e.target.value)}
                  />
                </div>

                <div id="input6">
                  <label>Height in Inch</label>
                  <br />
                  <input
                    type="number"
                    value={heightInch}
                    onChange={(e) => setHeightInch(e.target.value)}
                  />
                </div>
              </div>

              <div id="thirdrowinputs">
                <div id="input7">
                  <label>Occupation</label>
                  <br />
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                  />
                </div>
              </div>

              <h4 id="communication">Communication Details</h4>
              <div id="fourthrowinputs">
                <div id="input8">
                  <label>Mobile</label>
                  <br />
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <div id="input9">
                  <label>Email</label>
                  <br />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div id="fifthrowinputs">
                <div id="input10">
                  <label>Address</label>
                  <br />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div id="sixthrowinputs">
                <div id="input11">
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div id="input12">
                  <label>Pincode</label>
                  <br />
                  <input
                    type="number"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>
              </div>

              <div id="seventhrowinputs">
                <div id="input13">
                  <span id="title1">
                    Does any person(s) to be insured has any pre-existing
                    diseases
                  </span>
                  <br />
                  <input
                    type="checkbox"
                    id="none"
                    name="none"
                    value="none"
                    checked={preExistingDiseases.includes("none")}
                    onChange={(e) =>
                      handleCheckboxChange(e, setPreExistingDiseases)
                    }
                  />
                  <label>None of the family members</label>
                  <br />

                  <input
                    type="checkbox"
                    id="diabetes"
                    name="diabetes"
                    value="diabetes"
                    checked={preExistingDiseases.includes("diabetes")}
                    onChange={(e) =>
                      handleCheckboxChange(e, setPreExistingDiseases)
                    }
                  />
                  <label htmlFor="vehicle2">Diabetes</label>
                  <br />

                  <input
                    type="checkbox"
                    id="congenitaldisorder"
                    name="congenitaldisorder"
                    value="congenitaldisorder"
                    checked={preExistingDiseases.includes("congenitaldisorder")}
                    onChange={(e) =>
                      handleCheckboxChange(e, setPreExistingDiseases)
                    }
                  />
                  <label>Congenital Disorder</label>
                  <br />

                  <input
                    type="checkbox"
                    id="liverdiseases"
                    name="liverdiseases"
                    value="liverdiseases"
                    checked={preExistingDiseases.includes("liverdiseases")}
                    onChange={(e) =>
                      handleCheckboxChange(e, setPreExistingDiseases)
                    }
                  />
                  <label htmlFor="liverdiseases">Liver Diseases</label>
                </div>
              </div>

              <div id="eighthrowinputs">
                <div id="input14">
                  <span id="title2">
                    Has any of the proposed to be insured consulted/taken
                    treatment or recommended to take
                    investigations/medication/surgery other than for child
                    birth/minor injuries
                  </span>
                  <br />
                  <input
                    type="checkbox"
                    id="none2"
                    name="none2"
                    value="none"
                    checked={treatmentConsulted.includes("none")}
                    onChange={(e) =>
                      handleCheckboxChange(e, setTreatmentConsulted)
                    }
                  />
                  <label>None of the family members</label>
                </div>
              </div>

              <div id="ninethrowinputs">
                <div id="input15">
                  <span id="title3">
                    Has any of the proposed to be insured consulted/taken
                    treatment or recommended to take
                    investigations/medication/surgery other than for child
                    birth/minor injuries
                  </span>
                  <br />
                  <input
                    type="checkbox"
                    id="none3"
                    name="none3"
                    value="none"
                    checked={treatmentConsulted.includes("none")}
                    onChange={(e) =>
                      handleCheckboxChange(e, setTreatmentConsulted)
                    }
                  />
                  <label>None of the family members</label>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* For Second Block (Summary) */}
        <div id="secondblock">
          <div id="summary">
            <h4>Summary</h4>
            <div id="Basepremium">
              <span id="Basepremium1stpart">Base Premium - 1 Year</span>
              <span id="Basepremium2ndpart">₹ {initialprice}</span>
            </div>
            <div id="riderselection">
              <h4>Select Rider (s)</h4>
              <div id="riderselectionparts">
                <span id="riderselection1stpart">Missing Out on Benefits</span>
                <span id="riderselection2ndpart">View riders</span>
              </div>
            </div>

            <div id="addonsselection">
              <h4>Select Add-ons</h4>
              <div id="addonsselectionparts">
                <span id="addonsselection1stpart">No Add Ons Selected</span>
                <span id="addonsselection2ndpart">View add ons</span>
              </div>
            </div>

            <div id="warningmsg">
              <img src={pic1} alt="" />
              <h5>
                Port option is only available from ₹10 Lakh or above cover
                amount
              </h5>
            </div>

            <div id="totalpremselection">
              <div id="totalpremselectionparts">
                <span id="totalpremselection1stpart">Total premium</span>
                <span id="totalpremselection2ndpart">₹ {total}</span>
              </div>
            </div>

            <div id="benefitselection">
              <div id="benefitselectionparts">
                <span id="benefitselection1stpart">
                  Get up to ₹ 5,881 in benefits
                </span>
                <span id="benefitselection2ndpart">See how</span>
              </div>
            </div>

            <div id="proposalbtn">
              <button>Proceed to proposal</button>
            </div>

            <div id="submit">
              <h5>
                To Save the data in JSON DataBase, Click the Submit Button
              </h5>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userpage;
