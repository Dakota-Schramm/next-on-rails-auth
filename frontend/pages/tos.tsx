import Head from 'next/head';
import Title from '../components/informational/title';
import TitleSection from '../components/informational/title-section';

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Your Website Name</title>
      </Head>
      <section className='w-screen min-h-screen bg-blue-200'>
        <div className='flex-col w-2/3 p-4 mx-auto space-y-4 bg-blue-600 rounded-lg shadow-xl text-white/80'>
          <Title 
            title="[Your Website Name] Terms of Service"
            description="By accessing the website at [website URL], you are agreeing to be bound by these terms of service, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
          />

          <TitleSection 
            title="Use License"
            description="Permission is granted to temporarily download one copy of the materials (information or software) on [Your Website Name]'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:"
          />

          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on [Your Website Name]'s website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by [Your Website Name] at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

          <TitleSection
            title="Disclaimer"
            description={[
              "The materials on [Your Website Name]'s website are provided on an 'as is' basis. [Your Website Name] makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
              "Further, [Your Website Name] does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
            ]}
          />

          <TitleSection 
            title="Limitations"
            description="In no event shall [Your Website Name] or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on [Your Website Name]'s website, even if [Your Website Name] or a [Your Website Name] authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
          />

          <TitleSection 
            title="Accuracy of Materials"
            description="The materials appearing on [Your Website Name]'s website could include technical, typographical, or photographic errors. [Your Website Name] does not warrant that any of the materials on its website are accurate, complete or current. [Your Website Name] may make changes to the materials contained on its website at any time without notice. However, [Your Website Name] does not make any commitment to update the materials."
          />

          <TitleSection
            title="Links"
            description="[Your Website Name] has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by [Your Website Name] of the site. Use of any such linked website is at the user's own risk."
          />


          <TitleSection
            title="Modifications"
            description="[Your Website Name] may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
          />

          <TitleSection
            title="Governing Law"
            description="These terms and conditions are governed by and construed in accordance with the laws of [Your Country or State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
          />

          <TitleSection
            title="Privacy Policy"
            description='Please review our <a href="[link to privacy policy]">Privacy Policy</a>, which also governs your use of [Your Website Name], to understand our practices.'
          />

          <TitleSection
            title="Termination"
            description="[Your Website Name] reserves the right, in its sole discretion, to terminate your access to the website and the related services or any portion thereof at any time, without notice."
          />

          <TitleSection
            title="Entire Agreement"
            description={[
              "These terms and conditions constitute the entire agreement between you and [Your Website Name] in relation to your use of this website and supersede all prior agreements and understandings, whether written or oral, in relation to the website.",
              "By using this website, you are agreeing to these terms and conditions. If you do not agree with these terms and conditions, you should not use this website."
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Terms;
