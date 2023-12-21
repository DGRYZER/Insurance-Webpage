import React, { useState, useEffect } from "react";
import "./policypage.css";
import pic1 from "../img/logo.svg";
import pic2 from "../img/Warningimg.jpg";
import { Link } from "react-router-dom";

const Policypage = () => {
  const [showMore, setShowMore] = useState(false); // For Read More Option in Rider Section Option 3
  const [termprice, setTermPrice] = useState(0);
  const [riderprice, setriderprice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // For execution of policy period price
  const periodOption = (e) => {
    const selectedValue = parseInt(e.target.value);
    setTermPrice(selectedValue);
  };

  // For execution of riders price
  const riderOption = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setriderprice(selectedValue);
  };

  useEffect(() => {
    console.log("Selected term price:", termprice);
    console.log("Selected rider price:", riderprice);
    setTotalPrice(termprice + riderprice);
    localStorage.setItem(
      "data",
      JSON.stringify({
        initialprice: termprice,
        riderprice: riderprice,
        total: totalPrice,
      })
    );
  }, [termprice, riderprice, totalPrice]);

  // For execution of Read More Option present on 3rd riders option
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {/* For Mainpage */}
      <div id="mainpage">
        {/* For First Block (Cover Amount, Policy Period, Riders) */}
        <div id="firstblock">
          {/* For Logo, Cover Title and Cover Amount */}
          <div id="coveramount">
            <div id="logo">
              <img src={pic1} alt="loading" />
            </div>
            <div id="coveramounttitle">
              <h4>Smart Health Pro</h4>
              <div id="coveramounttitledetails">
                <h4 id="first">View All Features </h4>
                <h4 id="second">276 Cashless hospitals</h4>
              </div>
            </div>

            <div id="coveramountvalue">
              <label>Cover Amount</label>
              <br />
              <select name="amount" id="amount">
                <option value="Select Any">Select Any</option>
                <option value="7 Lakh">₹ 7 Lakh</option>
                <option value="10 Lakh">₹ 10 Lakh</option>
                <option value="15 Lakh">₹ 15 Lakh</option>
                <option value="20 Lakh">₹ 20 Lakh</option>
              </select>
            </div>
          </div>
          {/* For Policy Period */}
          <div id="policyperiod">
            <h4>Policy Period</h4>
            <p>
              Choosing a multi-year plan saves your money and the trouble of
              remembering yearly renewals.
            </p>
            <div id="periodoption">
              <div id="radio1">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={9166}
                    onChange={periodOption}
                    // checked={termprice === 9166} // Add this line to ensure correct default checked state
                  />
                  1 Year @ ₹9,166
                </label>
              </div>

              <div id="radio2">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={17416}
                    onChange={periodOption}
                    // checked={termprice === 17416} // Add this line to ensure correct default checked state
                  />
                  2 Year @ ₹17,416
                </label>
                <p>Save ₹1935</p>
              </div>

              <div id="radio3">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={25436}
                    onChange={periodOption}
                    // checked={termprice === 25436} // Add this line to ensure correct default checked state
                  />
                  3 Year @ ₹25,436
                </label>
                <p>Save ₹4100</p>
              </div>
            </div>
          </div>

          {/* For Riders Section */}
          <div id="riders">
            <h4>Riders</h4>
            <p>
              You should get this additional benefits to enhance your current
              plan
            </p>

            <div id="rider1">
              <div id="rider1details">
                <h4>Unlimited Automatic Restoration of Sum Instead</h4>
                <p>
                  Get up to 100% unlimited resolution of sum insured each time
                  upon partial/full utilization of the sum insured
                </p>
              </div>
              <div id="rider1prem">
                <h4>Premium</h4>
                <h5>₹458</h5>
              </div>
              <button value={458} onClick={riderOption}>
                Add
              </button>
            </div>

            <div id="rider2">
              <div id="rider2details">
                <h4>Modification of Room Category</h4>
                <p>
                  Get your room category modified to any Room or Shared
                  Accomodation from default private Single A/c room
                </p>
              </div>
              <div id="rider2prem">
                <span id="firstrider2premdetails">Room Category</span>
                <span id="secondrider2premdetails">Save ₹678</span>
                <h4>Shared Accomodation</h4>
              </div>
              <button value={550} onClick={riderOption}>
                Add
              </button>
            </div>

            <div id="rider3">
              <div id="rider3details">
                <h4>Non-Medical Items (Consumables) cover</h4>
                <p>
                  {" "}
                  Get coverage for non-medical items as per List I (refer policy
                  wording) in case of admissible claim under the policy for
                  impatient / day care treatment
                  {showMore && (
                    <>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur voluptatum explicabo asperiores architecto,
                      vitae distinctio, error est illo praesentium inventore
                      magni unde hic sint quibusdam magnam saepe dolore impedit
                      nihil qui dolorum facere. Nihil molestiae, sequi itaque
                      commodi exercitationem odio ex, accusantium in atque ut
                      voluptas, officia maiores eveniet eos.
                    </>
                  )}
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={toggleReadMore}
                  >
                    {showMore ? " Read less" : "... Read more"}
                  </span>
                </p>
              </div>
              <div id="rider3prem">
                <h4>Premium</h4>
                <h5>₹687</h5>
              </div>
              <button value={687} onClick={riderOption}>
                Add
              </button>
            </div>
          </div>
        </div>

        {/* For Second Block (Summary) */}
        <div id="secondblock">
          <div id="summary">
            <h4>Summary</h4>
            <div id="Basepremium">
              <span id="Basepremium1stpart">Base Premium - 1 Year</span>
              <span id="Basepremium2ndpart">₹ {termprice}</span>
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
              <img src={pic2} alt="" />
              <h5>
                Port option is only available from ₹10 Lakh or above cover
                amount
              </h5>
            </div>

            <div id="totalpremselection">
              <div id="totalpremselectionparts">
                <span id="totalpremselection1stpart">Total premium</span>
                <span id="totalpremselection2ndpart">₹ {totalPrice}</span>
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
              <Link to="/user">
                <button>Proceed to proposal</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policypage;
