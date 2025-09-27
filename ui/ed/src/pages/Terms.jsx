import React from "react";
import "./Terms.css"; // ✅ Import CSS
import { Link } from "react-router-dom";
function Terms() {
  return (
    <div className="page-container aaa ">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to <strong>msbtequestionpapers.in</strong>. By accessing and
        using our website, you agree to the following terms and conditions.
      </p>

      <h2>1. Use of Content</h2>
      <p>
        The question papers and resources on this website are provided for
        educational purposes only. All rights belong to the respective
        universities and institutions. We do not claim ownership of these
        materials.
      </p>

      <h2>2. User Responsibility</h2>
      <p>
        Users agree to use this website responsibly and only for study-related
        purposes. Any misuse of the content is strictly prohibited.
      </p>

      <h2>3. No Guarantee</h2>
      <p>
        While we try to provide accurate and updated information, we do not
        guarantee completeness or accuracy of the content. Students should
        verify with their official university resources.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        We are not responsible for any loss, academic issues, or damages
        resulting from the use of this website.
      </p>

      <h2>5. Updates to Terms</h2>
      <p>
        These terms may be updated from time to time. Continued use of the
        website means you accept the updated terms.
      </p>

      <p>
        If you have questions about our Terms & Conditions, please{" "}
        <nav>
<Link to="/contact">Contact</Link> 
        </nav>
       
      </p>
    </div>
  );
}

export default Terms;
