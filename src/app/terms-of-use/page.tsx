"use client";
import React, {useState} from "react";
import {Button} from "../components/buttons/primary-button";
import {Header} from "../components/Header";
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function TermsOfUse() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={() => setMenuOpen(!menuOpen)}
        component={
          <>
            <div className="p-4">
              <Button
                label="Create Card"
                handleOnClick={() => router.push("generate")}
                disabled={false}
                type="primary"
                size="full"
                icon={
                  <Image src="/wand.svg" width={20} height={20} alt="logo" />
                }
              />
            </div>
          </>
        }
      />
      <div className="min-h-screen max-w-2xl mx-auto py-14">
        <h1 className="text-3xl">Terms of use</h1>
        <br />
        <h3 className="text-md text-right">Last updated October 11, 2023</h3>
        <br />
        <br />
        <p>
          We are cardtothefuture (&quot;Company&quot;, &quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;). We operate the website
          http://www.cardtothefuture.com (the &quot;Site&quot;), as well as any
          other related products and services that refer or link to these legal
          terms (the &quot;Legal Terms&quot;) (collectively, the
          &quot;Services&quot;).You can contact us by phone at 07493774943,
          email at will@cardtothefuture.com. These Legal Terms constitute a
          legally binding agreement made between you, whether personally or on
          behalf of an entity (&quot;you&quot;), and cardtothefuture, concerning
          your access to and use of the Services. You agree that by accessing
          the Services, you have read, understood, and agreed to be bound by all
          of these Legal Terms.{" "}
          <strong>
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </strong>{" "}
          Supplemental terms and conditions or documents that may be posted on
          the Services from time to time are hereby expressly incorporated
          herein by reference. We reserve the right, in our sole discretion, to
          make changes or modifications to these Legal Terms from time to time.
          We will alert you about any changes by updating the &quot;Last
          updated&quot; date of these Legal Terms, and you waive any right to
          receive specific notice of each such change. It is your responsibility
          to periodically review these Legal Terms to stay informed of updates.
          You will be subject to, and will be deemed to have been made aware of
          and to have accepted, the changes in any revised Legal Terms by your
          continued use of the Services after the date such revised Legal Terms
          are posted. All users who are minors in the jurisdiction in which they
          reside (generally under the age of 18) must have the permission of,
          and be directly supervised by, their parent or guardian to use the
          Services. If you are a minor, you must have your parent or guardian
          read and agree to these Legal Terms prior to you using the Services.
          We recommend that you print a copy of these Legal Terms for your
          records.
        </p>
        <br />
        <h3 className="text-lg">TABLE OF CONTENTS</h3>
        <br />
        <ol>
          <li>OUR SERVICES</li>
          <li>INTELLECTUAL PROPERTY RIGHTS</li>
          <li>USER REPRESENTATIONS</li>
          <li>PRODUCTS</li>
          <li>PURCHASES AND PAYMENT</li>
          <li>RETURN POLICY</li>
          <li>PROHIBITED ACTIVITIES</li>
          <li>USER GENERATED CONTRIBUTIONS</li>
          <li>CONTRIBUTION LICENCE</li>
          <li>GUIDELINES FOR REVIEWS</li>
          <li>SERVICES MANAGEMENT</li>
          <li>PRIVACY POLICY</li>
          <li>COPYRIGHT INFRINGEMENTS</li>
          <li>TERM AND TERMINATION</li>
          <li>MODIFICATIONS AND INTERRUPTIONS</li>
          <li>GOVERNING LAW</li>
          <li>DISPUTE RESOLUTION</li>
          <li>CORRECTIONS</li>
          <li>DISCLAIMER</li>
          <li>LIMITATIONS OF LIABILITY</li>
          <li>INDEMNIFICATION</li>
          <li>USER DATA</li>
          <li>ELECTRONIC COMMUNICATIONS</li>
          <li>TRANSACTIONS, AND SIGNATURES</li>
          <li>CALIFORNIA USERS AND RESIDENTS</li>
          <li>MISCELLANEOUS</li>
          <li>CONTACT US</li>
        </ol>
        <br />
        <h3 className="text-lg">1. OUR SERVICES</h3>
        <br />
        <p>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.The Services are not
          tailored to comply with industry-specific regulations (Health
          Insurance Portability and Accountability Act (HIPAA), Federal
          Information Security Management Act (FISMA), etc.), so if your
          interactions would be subjected to such laws, you may not use the
          Services. You may not use the Services in a way that would violate the
          Gramm-Leach-Bliley Act (GLBA).
        </p>
        <br />
        <br />
        <h3 className="text-lg">2. INTELLECTUAL PROPERTY RIGHTS</h3>
        <br />
        <p>
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the &quot;Content&quot;), as
          well as the trademarks, service marks, and logos contained therein
          (the &quot;Marks&quot;).Our Content and Marks are protected by
          copyright and trademark laws (and various other intellectual property
          rights and unfair competition laws) and treaties in the United States
          and around the world.The Content and Marks are provided in or through
          the Services &quot;AS IS&quot; for your personal, non-commercial use
          only.Your use of our ServicesSubject to your compliance with these
          Legal Terms, including the &quot;PROHIBITED ACTIVITIES&quot; section
          below, we grant you a non-exclusive, non-transferable, revocable
          licence to:access the Services; anddownload or print a copy of any
          portion of the Content to which you have properly gained access.solely
          for your personal, non-commercial use.Except as set out in this
          section or elsewhere in our Legal Terms, no part of the Services and
          no Content or Marks may be copied, reproduced, aggregated,
          republished, uploaded, posted, publicly displayed, encoded,
          translated, transmitted, distributed, sold, licensed, or otherwise
          exploited for any commercial purpose whatsoever, without our express
          prior written permission.If you wish to make any use of the Services,
          Content, or Marks other than as set out in this section or elsewhere
          in our Legal Terms, please address your request to:
          will@cardtothefuture.com. If we ever grant you the permission to post,
          reproduce, or publicly display any part of our Services or Content,
          you must identify us as the owners or licensors of the Services,
          Content, or Marks and ensure that any copyright or proprietary notice
          appears or is visible on posting, reproducing, or displaying our
          Content.We reserve all rights not expressly granted to you in and to
          the Services, Content, and Marks.Any breach of these Intellectual
          Property Rights will constitute a material breach of our Legal Terms
          and your right to use our Services will terminate immediately.Your
          submissions and contributionsPlease review this section and the
          &quot;PROHIBITED ACTIVITIES&quot; section carefully prior to using our
          Services to understand the (a) rights you give us and (b) obligations
          you have when you post or upload any content through the
          Services.Submissions: By directly sending us any question, comment,
          suggestion, idea, feedback, or other information about the Services
          (&quot;Submissions&quot;), you agree to assign to us all intellectual
          property rights in such Submission. You agree that we shall own this
          Submission and be entitled to its unrestricted use and dissemination
          for any lawful purpose, commercial or otherwise, without
          acknowledgment or compensation to you.Contributions: The Services may
          invite you to chat, contribute to, or participate in blogs, message
          boards, online forums, and other functionality during which you may
          create, submit, post, display, transmit, publish, distribute, or
          broadcast content and materials to us or through the Services,
          including but not limited to text, writings, video, audio,
          photographs, music, graphics, comments, reviews, rating suggestions,
          personal information, or other material (&quot;Contributions&quot;).
          Any Submission that is publicly posted shall also be treated as a
          Contribution.You understand that Contributions may be viewable by
          other users of the Services.When you post Contributions, you grant us
          a licence (including use of your name, trademarks, and logos): By
          posting any Contributions, you grant us an unrestricted, unlimited,
          irrevocable, perpetual, non-exclusive, transferable, royalty-free,
          fully-paid, worldwide right, and licence to: use, copy, reproduce,
          distribute, sell, resell, publish, broadcast, retitle, store, publicly
          perform, publicly display, reformat, translate, excerpt (in whole or
          in part), and exploit your Contributions (including, without
          limitation, your image, name, and voice) for any purpose, commercial,
          advertising, or otherwise, to prepare derivative works of, or
          incorporate into other works, your Contributions, and to sublicence
          the licences granted in this section. Our use and distribution may
          occur in any media formats and through any media channels.This licence
          includes our use of your name, company name, and franchise name, as
          applicable, and any of the trademarks, service marks, trade names,
          logos, and personal and commercial images you provide.You are
          responsible for what you post or upload: By sending us Submissions
          and/or posting Contributions through any part of the Services or
          making Contributions accessible through the Services by linking your
          account through the Services to any of your social networking
          accounts, you:confirm that you have read and agree with our
          &quot;PROHIBITED ACTIVITIES&quot; and will not post, send, publish,
          upload, or transmit through the Services any Submission nor post any
          Contribution that is illegal, harassing, hateful, harmful, defamatory,
          obscene, bullying, abusive, discriminatory, threatening to any person
          or group, sexually explicit, false, inaccurate, deceitful, or
          misleading;to the extent permissible by applicable law, waive any and
          all moral rights to any such Submission and/or Contribution;warrant
          that any such Submission and/or Contributions are original to you or
          that you have the necessary rights and licences to submit such
          Submissions and/or Contributions and that you have full authority to
          grant us the above-mentioned rights in relation to your Submissions
          and/or Contributions; andwarrant and represent that your Submissions
          and/or Contributions do not constitute confidential information.You
          are solely responsible for your Submissions and/or Contributions and
          you expressly agree to reimburse us for any and all losses that we may
          suffer because of your breach of (a) this section, (b) any third
          party’s intellectual property rights, or (c) applicable law.We may
          remove or edit your Content: Although we have no obligation to monitor
          any Contributions, we shall have the right to remove or edit any
          Contributions at any time without notice if in our reasonable opinion
          we consider such Contributions harmful or in breach of these Legal
          Terms. If we remove or edit any such Contributions, we may also
          suspend or disable your account and report you to the
          authorities.Copyright infringementWe respect the intellectual property
          rights of others. If you believe that any material available on or
          through the Services infringes upon any copyright you own or control,
          please immediately refer to the{" "}
          <strong>&quot;COPYRIGHT INFRINGEMENTS&quot;</strong>
          section below.
        </p>
        <br />
        <br />
        <h3 className="text-lg">3. USER REPRESENTATIONS</h3>
        <br />

        <p>
          By using the Services, you represent and warrant that: (1) you have
          the legal capacity and you agree to comply with these Legal Terms; (2)
          you are not a minor in the jurisdiction in which you reside, or if a
          minor, you have received parental permission to use the Services; (3)
          you will not access the Services through automated or non-human means,
          whether through a bot, script or otherwise; (4) you will not use the
          Services for any illegal or unauthorised purpose; and (5) your use of
          the Services will not violate any applicable law or regulation.If you
          provide any information that is untrue, inaccurate, not current, or
          incomplete, we have the right to suspend or terminate your account and
          refuse any and all current or future use of the Services (or any
          portion thereof).
        </p>

        <br />
        <br />

        <h3 className="text-lg">4. PRODUCTS</h3>
        <br />
        <p>
          We make every effort to display as accurately as possible the colours,
          features, specifications, and details of the products available on the
          Services. However, we do not guarantee that the colours, features,
          specifications, and details of the products will be accurate,
          complete, reliable, current, or free of other errors, and your
          electronic display may not accurately reflect the actual colours and
          details of the products. All products are subject to availability, and
          we cannot guarantee that items will be in stock. We reserve the right
          to discontinue any products at any time for any reason. Prices for all
          products are subject to change.
        </p>
        <br />
        <br />
        <h3 className="text-lg">5. PURCHASES AND PAYMENT</h3>
        <br />
        <p>
          We accept the following forms of payment:-  Visa-  Mastercard-
           American Express-  PayPalYou agree to provide current, complete, and
          accurate purchase and account information for all purchases made via
          the Services. You further agree to promptly update account and payment
          information, including email address, payment method, and payment card
          expiration date, so that we can complete your transactions and contact
          you as needed. Sales tax will be added to the price of purchases as
          deemed required by us. We may change prices at any time. All payments
          shall be in Pound sterling.You agree to pay all charges at the prices
          then in effect for your purchases and any applicable shipping fees,
          and you authorise us to charge your chosen payment provider for any
          such amounts upon placing your order. We reserve the right to correct
          any errors or mistakes in pricing, even if we have already requested
          or received payment.We reserve the right to refuse any order placed
          through the Services. We may, in our sole discretion, limit or cancel
          quantities purchased per person, per household, or per order. These
          restrictions may include orders placed by or under the same customer
          account, the same payment method, and/or orders that use the same
          billing or shipping address. We reserve the right to limit or prohibit
          orders that, in our sole judgement, appear to be placed by dealers,
          resellers, or distributors.
        </p>
        <br />
        <br />
        <h3 className="text-lg">6. RETURN POLICY</h3>
        <br />
        <p>All sales are final and no refund will be issued.</p>
        <br />
        <br />
        <h3 className="text-lg">7. PROHIBITED</h3>
        <br />
        <p>
          ACTIVITIESYou may not access or use the Services for any purpose other
          than that for which we make the Services available. The Services may
          not be used in connection with any commercial endeavours except those
          that are specifically endorsed or approved by us.As a user of the
          Services, you agree not to:Systematically retrieve data or other
          content from the Services to create or compile, directly or
          indirectly, a collection, compilation, database, or directory without
          written permission from us.Trick, defraud, or mislead us and other
          users, especially in any attempt to learn sensitive account
          information such as user passwords.Circumvent, disable, or otherwise
          interfere with security-related features of the Services, including
          features that prevent or restrict the use or copying of any Content or
          enforce limitations on the use of the Services and/or the Content
          contained therein.Disparage, tarnish, or otherwise harm, in our
          opinion, us and/or the Services.Use any information obtained from the
          Services in order to harass, abuse, or harm another person.Make
          improper use of our support services or submit false reports of abuse
          or misconduct.Use the Services in a manner inconsistent with any
          applicable laws or regulations.Engage in unauthorised framing of or
          linking to the Services.Upload or transmit (or attempt to upload or to
          transmit) viruses, Trojan horses, or other material, including
          excessive use of capital letters and spamming (continuous posting of
          repetitive text), that interferes with any party’s uninterrupted use
          and enjoyment of the Services or modifies, impairs, disrupts, alters,
          or interferes with the use, features, functions, operation, or
          maintenance of the Services.Engage in any automated use of the system,
          such as using scripts to send comments or messages, or using any data
          mining, robots, or similar data gathering and extraction tools.Delete
          the copyright or other proprietary rights notice from any
          Content.Attempt to impersonate another user or person or use the
          username of another user.Upload or transmit (or attempt to upload or
          to transmit) any material that acts as a passive or active information
          collection or transmission mechanism, including without limitation,
          clear graphics interchange formats (&quot;gifs&quot;), 1×1 pixels, web
          bugs, cookies, or other similar devices (sometimes referred to as
          &quot;spyware&quot; or &quot;passive collection &quot;mechanisms&quot;
          or &quot;pcms&quot;).Interfere with, disrupt, or create an undue
          burden on the Services or the networks or services connected to the
          Services.Harass, annoy, intimidate, or threaten any of our employees
          or agents engaged in providing any portion of the Services to
          you.Attempt to bypass any measures of the Services designed to prevent
          or restrict access to the Services, or any portion of the Services.
          Copy or adapt the &quot;Services&quot; software, including but not
          limited to Flash, PHP, HTML, JavaScript, or other code.Except as
          permitted by applicable law, decipher, decompile, disassemble, or
          reverse engineer any of the software comprising or in any way making
          up a part of the Services.Except as may be the result of standard
          search engine or Internet browser usage, use, launch, develop, or
          distribute any automated system, including without limitation, any
          spider, robot, cheat utility, scraper, or offline reader that accesses
          the Services, or use or launch any unauthorised script or other
          software.Use a buying agent or purchasing agent to make purchases on
          the Services.Make any unauthorised use of the Services, including
          collecting usernames and/or email addresses of users by electronic or
          other means for the purpose of sending unsolicited email, or creating
          user accounts by automated means or under false pretences.Use the
          Services as part of any effort to compete with us or otherwise use the
          Services and/or the Content for any revenue-generating endeavour or
          commercial enterprise.
        </p>
        <br />
        <br />
        <h3 className="text-lg">8. USER GENERATED CONTRIBUTIONS</h3>
        <br />
        <p>
          The Services may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Services, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          &quot;Contributions&quot;). Contributions may be viewable by other
          users of the Services and through third-party websites. As such, any
          Contributions you transmit may be treated as non-confidential and
          non-proprietary. When you create or make available any Contributions,
          you thereby represent and warrant that:The creation, distribution,
          transmission, public display, or performance, and the accessing,
          downloading, or copying of your Contributions do not and will not
          infringe the proprietary rights, including but not limited to the
          copyright, patent, trademark, trade secret, or moral rights of any
          third party.You are the creator and owner of or have the necessary
          licences, rights, consents, releases, and permissions to use and to
          authorise us, the Services, and other users of the Services to use
          your Contributions in any manner contemplated by the Services and
          these Legal Terms.You have the written consent, release, and/or
          permission of each and every identifiable individual person in your
          Contributions to use the name or likeness of each and every such
          identifiable individual person to enable inclusion and use of your
          Contributions in any manner contemplated by the Services and these
          Legal Terms.Your Contributions are not false, inaccurate, or
          misleading.Your Contributions are not unsolicited or unauthorised
          advertising, promotional materials, pyramid schemes, chain letters,
          spam, mass mailings, or other forms of solicitation.Your Contributions
          are not obscene, lewd, lascivious, filthy, violent, harassing,
          libellous, slanderous, or otherwise objectionable (as determined by
          us).Your Contributions do not ridicule, mock, disparage, intimidate,
          or abuse anyone.Your Contributions are not used to harass or threaten
          (in the legal sense of those terms) any other person and to promote
          violence against a specific person or class of people.Your
          Contributions do not violate any applicable law, regulation, or
          rule.Your Contributions do not violate the privacy or publicity rights
          of any third party.Your Contributions do not violate any applicable
          law concerning child pornography, or otherwise intended to protect the
          health or well-being of minors.Your Contributions do not include any
          offensive comments that are connected to race, national origin,
          gender, sexual preference, or physical handicap.Your Contributions do
          not otherwise violate, or link to material that violates, any
          provision of these Legal Terms, or any applicable law or
          regulation.Any use of the Services in violation of the foregoing
          violates these Legal Terms and may result in, among other things,
          termination or suspension of your rights to use the Services.
        </p>
        <br />
        <br />
        <h3 className="text-lg">9. CONTRIBUTION LICENCE</h3>
        <br />
        <p>
          By posting your Contributions to any part of the Services, you
          automatically grant, and you represent and warrant that you have the
          right to grant, to us an unrestricted, unlimited, irrevocable,
          perpetual, non-exclusive, transferable, royalty-free, fully-paid,
          worldwide right, and licence to host, use, copy, reproduce, disclose,
          sell, resell, publish, broadcast, retitle, archive, store, cache,
          publicly perform, publicly display, reformat, translate, transmit,
          excerpt (in whole or in part), and distribute such Contributions
          (including, without limitation, your image and voice) for any purpose,
          commercial, advertising, or otherwise, and to prepare derivative works
          of, or incorporate into other works, such Contributions, and grant and
          authorise sublicences of the foregoing. The use and distribution may
          occur in any media formats and through any media channels.This licence
          will apply to any form, media, or technology now known or hereafter
          developed, and includes our use of your name, company name, and
          franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide. You waive all moral rights in your Contributions, and you
          warrant that moral rights have not otherwise been asserted in your
          Contributions.We do not assert any ownership over your Contributions.
          You retain full ownership of all of your Contributions and any
          intellectual property rights or other proprietary rights associated
          with your Contributions. We are not liable for any statements or
          representations in your Contributions provided by you in any area on
          the Services. You are solely responsible for your Contributions to the
          Services and you expressly agree to exonerate us from any and all
          responsibility and to refrain from any legal action against us
          regarding your Contributions.We have the right, in our sole and
          absolute discretion, (1) to edit, redact, or otherwise change any
          Contributions; (2) to re-categorise any Contributions to place them in
          more appropriate locations on the Services; and (3) to pre-screen or
          delete any Contributions at any time and for any reason, without
          notice. We have no obligation to monitor your Contributions.
        </p>
        <br />
        <br />

        <h3 className="text-lg">10. GUIDELINES FOR REVIEWS</h3>
        <br />
        <p>
          We may provide you areas on the Services to leave reviews or ratings.
          When posting a review, you must comply with the following criteria:
          (1) you should have firsthand experience with the person/entity being
          reviewed; (2) your reviews should not contain offensive profanity, or
          abusive, racist, offensive, or hateful language; (3) your reviews
          should not contain discriminatory references based on religion, race,
          gender, national origin, age, marital status, sexual orientation, or
          disability; (4) your reviews should not contain references to illegal
          activity; (5) you should not be affiliated with competitors if posting
          negative reviews; (6) you should not make any conclusions as to the
          legality of conduct; (7) you may not post any false or misleading
          statements; and (8) you may not organise a campaign encouraging others
          to post reviews, whether positive or negative.We may accept, reject,
          or remove reviews in our sole discretion. We have absolutely no
          obligation to screen reviews or to delete reviews, even if anyone
          considers reviews objectionable or inaccurate. Reviews are not
          endorsed by us, and do not necessarily represent our opinions or the
          views of any of our affiliates or partners. We do not assume liability
          for any review or for any claims, liabilities, or losses resulting
          from any review. By posting a review, you hereby grant to us a
          perpetual, non-exclusive, worldwide, royalty-free, fully paid,
          assignable, and sublicensable right and licence to reproduce, modify,
          translate, transmit by any means, display, perform, and/or distribute
          all content relating to review.
        </p>
        <br />
        <br />

        <h3 className="text-lg">11. SERVICES MANAGEMENT</h3>
        <br />
        <p>
          We reserve the right, but not the obligation, to: (1) monitor the
          Services for violations of these Legal Terms; (2) take appropriate
          legal action against anyone who, in our sole discretion, violates the
          law or these Legal Terms, including without limitation, reporting such
          user to law enforcement authorities; (3) in our sole discretion and
          without limitation, refuse, restrict access to, limit the availability
          of, or disable (to the extent technologically feasible) any of your
          Contributions or any portion thereof; (4) in our sole discretion and
          without limitation, notice, or liability, to remove from the Services
          or otherwise disable all files and content that are excessive in size
          or are in any way burdensome to our systems; and (5) otherwise manage
          the Services in a manner designed to protect our rights and property
          and to facilitate the proper functioning of the Services.
        </p>
        <br />
        <br />

        <h3 className="text-lg">12. PRIVACY POLICY</h3>
        <br />
        <p>
          We care about data privacy and security. Please review our Privacy
          Policy: http://www.cardtothefuture.com/privacy-policy. By using the
          Services, you agree to be bound by our Privacy Policy, which is
          incorporated into these Legal Terms. Please be advised the Services
          are hosted in the United Kingdom. If you access the Services from any
          other region of the world with laws or other requirements governing
          personal data collection, use, or disclosure that differ from
          applicable laws in the United Kingdom, then through your continued use
          of the Services, you are transferring your data to the United Kingdom,
          and you expressly consent to have your data transferred to and
          processed in the United Kingdom.
        </p>
        <br />
        <br />
        <h3 className="text-lg">13. COPYRIGHT INFRINGEMENTS</h3>
        <br />
        <p>
          We respect the intellectual property rights of others. If you believe
          that any material available on or through the Services infringes upon
          any copyright you own or control, please immediately notify us using
          the contact information provided below (a &quot;Notification&quot;). A
          copy of your Notification will be sent to the person who posted or
          stored the material addressed in the Notification. Please be advised
          that pursuant to applicable law you may be held liable for damages if
          you make material misrepresentations in a Notification. Thus, if you
          are not sure that material located on or linked to by the Services
          infringes your copyright, you should consider first contacting an
          attorney.
        </p>
        <br />
        <br />

        <h3 className="text-lg">14. TERM AND TERMINATION</h3>
        <br />
        <p>
          These Legal Terms shall remain in full force and effect while you use
          the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL
          TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
          APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION
          THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
          DISCRETION.If we terminate or suspend your account for any reason, you
          are prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </p>
        <br />
        <br />

        <h3 className="text-lg">15. MODIFICATIONS AND INTERRUPTIONS</h3>
        <br />
        <p>
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. We also reserve the right to modify or discontinue all
          or part of the Services without notice at any time. We will not be
          liable to you or any third party for any modification, price change,
          suspension, or discontinuance of the Services.We cannot guarantee the
          Services will be available at all times. We may experience hardware,
          software, or other problems or need to perform maintenance related to
          the Services, resulting in interruptions, delays, or errors. We
          reserve the right to change, revise, update, suspend, discontinue, or
          otherwise modify the Services at any time or for any reason without
          notice to you. You agree that we have no liability whatsoever for any
          loss, damage, or inconvenience caused by your inability to access or
          use the Services during any downtime or discontinuance of the
          Services. Nothing in these Legal Terms will be construed to obligate
          us to maintain and support the Services or to supply any corrections,
          updates, or releases in connection therewith.
        </p>
        <br />
        <br />

        <h3 className="text-lg">16. GOVERNING LAW</h3>
        <br />
        <p>
          These Legal Terms are governed by and interpreted following the laws
          of the United Kingdom, and the use of the United Nations Convention of
          Contracts for the International Sales of Goods is expressly excluded.
          If your habitual residence is in the EU, and you are a consumer, you
          additionally possess the protection provided to you by obligatory
          provisions of the law in your country to residence. cardtothefuture
          and yourself both agree to submit to the non-exclusive jurisdiction of
          the courts of __________, which means that you may make a claim to
          defend your consumer protection rights in regards to these Legal Terms
          in the United Kingdom, or in the EU country in which you reside.
        </p>
        <br />
        <br />

        <h3 className="text-lg">17. DISPUTE RESOLUTION</h3>
        <br />

        <p>
          The European Commission provides an online dispute resolution
          platform, which you can access. If you would like to bring this
          subject to our attention, please contact us.
        </p>
        <br />
        <br />

        <h3 className="text-lg">18. CORRECTIONS</h3>
        <br />

        <p>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
        <br />
        <br />

        <h3 className="text-lg">19. DISCLAIMER</h3>
        <br />
        <p>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
          AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF &quot;THE SERVICES&quot; CONTENT OR THE
          CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES
          AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
          MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
          INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
          YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS TO
          OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
          AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
          CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
          VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
          THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
          OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
          ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
          TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT
          WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT
          OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL
          NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
          MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND
          EXERCISE CAUTION WHERE APPROPRIATE.
        </p>
        <br />
        <br />

        <h3 className="text-lg">20. LIMITATIONS OF LIABILITY</h3>
        <br />
        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
          HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
          OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
          PAID, IF ANY, BY YOU TO US. CERTAIN US STATE LAWS AND INTERNATIONAL
          LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION
          OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR
          ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
          YOU MAY HAVE ADDITIONAL RIGHTS.
        </p>
        <br />
        <br />

        <h3 className="text-lg">21. INDEMNIFICATION</h3>
        <br />
        <p>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys’ fees and expenses,
          made by any third party due to or arising out of: (1) your
          Contributions; (2) use of the Services; (3) breach of these Legal
          Terms; (4) any breach of your representations and warranties set forth
          in these Legal Terms; (5) your violation of the rights of a third
          party, including but not limited to intellectual property rights; or
          (6) any overt harmful act toward any other user of the Services with
          whom you connected via the Services. Notwithstanding the foregoing, we
          reserve the right, at your expense, to assume the exclusive defence
          and control of any matter for which you are required to indemnify us,
          and you agree to cooperate, at your expense, with our defence of such
          claims. We will use reasonable efforts to notify you of any such
          claim, action, or proceeding which is subject to this indemnification
          upon becoming aware of it.
        </p>
        <br />
        <br />

        <h3 className="text-lg">22. USER DATA</h3>
        <br />
        <p>
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </p>
        <br />
        <br />

        <h3 className="text-lg">
          23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
        </h3>
        <br />
        <p>
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Services, satisfy any legal
          requirement that such communication be in writing. YOU HEREBY AGREE TO
          THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
          RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
          OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You
          hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </p>
        <br />
        <br />

        <h3 className="text-lg">24. CALIFORNIA USERS AND RESIDENTS</h3>
        <br />
        <p>
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834
          or by telephone at 07493774943.
        </p>
        <br />
        <br />

        <h3 className="text-lg">25. MISCELLANEOUS</h3>
        <br />
        <p>
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. We may assign any or
          all of our rights and obligations to others at any time. We shall not
          be responsible or liable for any loss, damage, delay, or failure to
          act caused by any cause beyond our reasonable control. If any
          provision or part of a provision of these Legal Terms is determined to
          be unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Legal Terms and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Legal
          Terms or use of the Services. You agree that these Legal Terms will
          not be construed against us by virtue of having drafted them. You
          hereby waive any and all defences you may have based on the electronic
          form of these Legal Terms and the lack of signing by the parties
          hereto to execute these Legal Terms.
        </p>
        <br />
        <br />

        <h3 className="text-lg">26. CONTACT US</h3>
        <br />
        <p>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact by
          phone: 07493774943 or by email: will@cardtothefuture.com
        </p>
        <br />
        <br />

        <div>
          <Button
            label="Go home"
            handleOnClick={() => window.location.assign("/")}
            type="primary"
          />
        </div>
      </div>
    </>
  );
}
