import { Fragment, useState } from "react";
import PageHeading from "@/components/PageHeading";
import metaDataHelper from "@/helpers/metaDataHelper";
import arrayLandingHelpers from "@/helpers/arrayLandingHelpers";
import AuthDataHelper from "@/helpers/AuthDataHelper";
import { useRouter } from "next/router";

const Signup = (): JSX.Element => {
  const router = useRouter();
  const { metaData } = metaDataHelper();
  const { navLandingData } = arrayLandingHelpers();
  const { loginData } = AuthDataHelper();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const emailValue = form["email"].value;
    setEmail(emailValue);
    router.push(`/codeverification/${emailValue}`);
  };

  return (
    <Fragment>
      <PageHeading title={metaData.metaTitle.signupTitle} />
      <section className="signup">
        <div className="signup__container">
          <div className="logo">
            <img src={navLandingData.logo} alt="" />
            <h4
              dangerouslySetInnerHTML={{ __html: navLandingData.logo_title }}
              className="mx-1"
            />
          </div>
          <div className="title mt-3">
            <h2>S'inscrire en créant votre compte</h2>
          </div>

          <div className="formulaire mt-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder={`${loginData.emailPlaceholder}`}
                />
              </div>
              <div className="button mt-4">
                <button type="submit" className="btn">
                  Créer un compte
                </button>
              </div>

              <div className="authGoogle">
                <p>OU</p>
                <button className="btn">
                  <img src={loginData.google_img} className="mx-2" alt="" />
                  Continuer avec Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Signup;
