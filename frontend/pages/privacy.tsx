import Head from 'next/head';
import Title from '../components/informational/title';
import TitleSection from '../components/informational/title-section';

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Your Website Name</title>
      </Head>
      <section className='w-screen min-h-screen bg-blue-200'>
        <div className='flex-col w-2/3 p-4 mx-auto space-y-4 bg-blue-600 rounded-lg shadow-xl text-white/80'>
          <Title
            title="Privacy Policy"
            description="Your privacy is important to us. It is [Your Website Name]'s policy to
              respect your privacy regarding any information we may collect from you
              across our website, [Your Website URL], and other sites we own and
              operate.
            "
          />

          <TitleSection
            title="Information We Collect"
            description={[
              "We only collect information about you if we have a reason to do so–for example, to provide our services, to communicate with you, or to make our services better.",
              "We collect this information from three sources: if and when you provide information to us, automatically through operating our services, and from outside sources. ",
              "The information we collect depends on the services you use, and may include your name, email address, phone number, and IP address."
            ]}
          />

          <TitleSection 
            title="How We Use Information"
            description="We use the information we collect in various ways, including to:"
          />
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <TitleSection
            title="Third-Party Services"
            description="We may use third-party services to help us operate our website, such as hosting services, email delivery services, and analytics services. These third-party service providers may have access to your personal information in order to perform their functions, but they are obligated to maintain the confidentiality and security of that information and are restricted from using it for any other purpose."
          />

          <TitleSection
            title="Cookies"
            description="A cookie is a small piece of data that is stored on your computer or mobile device. We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services. You consent to our cookies if you continue to use our website."
          />

          <TitleSection
            title="Security"
            description="We take the security of your personal information seriously and have implemented measures to protect it from unauthorized access, use, alteration, or disclosure."
          />

          <TitleSection
            title="Changes to This Privacy Policy"
            description="We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
          />

          <TitleSection 
            title="Contact Us"
            description="If you have any questions or concerns about our Privacy Policy, please contact us at [Your Contact Email]."
          />
        </div>
      </section>
    </>
  );
};

export default Privacy;
