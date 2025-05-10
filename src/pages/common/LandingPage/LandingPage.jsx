import { FlexBox } from '../../../components/reusables/AllContainers'
import NavBar from './NavBar'
import { Text } from '../../../components/reusables/AllTexts'
import { ArrowDown, ArrowUp } from '@phosphor-icons/react'
import { Button } from '../../../components/reusables/AllButtons'
import { registerUser } from '../../../api/landingPageApi'
import { useState } from 'react'

const LandingPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const faqList = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for our premium plans. This allows you to experience the full range of our services before committing to a subscription.",
    },

    {
      question: "Can I cancel my subscription at anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time through your account settings. Upon cancellation, you will retain access to premium features until the end of your current billing cycle.",
    },
    {
      question: "How does Vestipy select its stock recommendations?",
      answer:
        "At Vestipy, we don't generate the stock recommendations ourselves. Instead, we provide a platform where experts in their respective fields offer their recommendations. Each expert uses their own strategies and methodologies to analyze the market and identify potential stock picks. To ensure you make informed decisions, we encourage you to review the performance history of our experts before subscribing to their plans. This way, you can choose experts whose track records and trading styles align with your investment goals and risk tolerance.",
    },
    {
      question:
        "How can I evaluate the reliability of an expert's trading calls?",
      answer:
        "You can evaluate an expert’s reliability by reviewing their performance history, reading user reviews, and checking their success rates. Our platform provides comprehensive data to help you make informed choices.",
    },
    {
      question: "How often are trading calls updated?",
      answer:
        "The frequency of updates depends on the expert and market conditions. Some experts may provide daily updates, while others may issue calls based on specific market opportunities. You can check each expert’s profile for their update frequency.",
    },
  ];

  const handleSubmit = (event)=>{
    // prevent default
    event.preventDefault()

    registerUser({name, phone, email})

    setEmail("")
    setName("")
    setPhone("")

  }
  

  return (
    <>
      <NavBar />
      <FlexBox column={true} className={"items-center"}>
        {/* Hero Section */}
        <FlexBox column={true} className={'items-center py-20'}>

          <Text type={'h1'} className={'xl:text-[4rem] lg:text-[3rem] md:text-[2rem] xs:text-[1.75rem] font-extrabold text-center w-2/3 sm:w-[95%] inline'}> <span>
            <div className={'flex items-center justify-center'}>
              <span>Get expert calls</span>
              <ArrowUp className='text-green-500 ' weight='bold' />
              <ArrowDown className='text-red-500 ml-[-2%] ' weight='bold' />
              with
            </div>
          </span>
            <span className='text-primary'> 90% accuracy</span> and grow your trading account.</Text>
          {/* <div className={'flex items-center justify-center gap-4'}>
              grow <TrendUp className='text-green-500 ' weight='bold' /> your trading account.
            </div> */}

          {/* <iframe src="https://lottie.host/embed/22d9eeaf-a597-46d7-8c3d-61842981b551/g5dTmQ894f.lottie"></iframe> */}
        </FlexBox>

        {/* Registration */}
        <FlexBox className={'bg-main-lightest mt-10 py-20 px-40 xs:px-8  xs:flex-col sm:flex-col'}>

          <FlexBox column={true} className={'md:pr-10 sm:pr-0 lg:pr-20 gap-11 '}>
            <Text type={'h1'} className={'leading-tight xl:text-[3rem] sm:text-2xl'} >Pre Register Now to Get Your Free Subscription Before Launch!
            </Text>
            <Text className={'text-justify'}>This pre-launch offer is valid for only for first 1000 people who will get completely free access to our platform for 3 Months on registering before launch.</Text>
          </FlexBox>

          <FlexBox column={true} className={'shadow-2xl rounded-2xl md:w-2/3 p-12 bg-tw mt-[-8rem] sm:mt-0 xs:mt-0 xs:pl-6 xs:pr-6 xs:pt-8'}>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <FlexBox column={true} className={"gap-0"}>
                <label className="text-t4 m-0 p-0">Name</label>
                <input
                  placeholder="Your Name"
                  className="p-4 border-2 border-t rounded-md w-full"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </FlexBox>
              <FlexBox column={true} className={"gap-0"}>
                <label className="text-t4 m-0 p-0">Phone</label>
                <input
                  placeholder="+91-987654310"
                  className="p-4 border-2 border-t rounded-md w-full"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </FlexBox>
              <FlexBox column={true} className={"gap-0"}>
                <label className="text-t4 m-0 p-0">Email</label>
                <input
                  placeholder="example@ex.com"
                  className="p-4 border-2 border-t rounded-md w-full"
                  value = {email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </FlexBox>

              <Button type={'submit'} className={'bg-primary text-tw py-4 text-xl font-semibold px-2 xs:text-sm'}>Book My Free Access Now!</Button>

            </form>
          </FlexBox>
        </FlexBox>

        {/* What we offer */}
        {/* How it works */}

        {/* FAQS */}

        <FlexBox className={"justify-center p-5 sm:p-20"}>
          <FlexBox column={true} className={"max-w-[40rem]"}>
            <Text type={"h1"}>FAQs</Text>
            {faqList.map((item, idx) => (
              <>
                <Text key={-idx+100} type={"h3"}>
                  {item.question}
                </Text>
                <Text key={idx} className={"text-t3 text-justify"}>
                  {item.answer}
                </Text>
              </>
            ))}
          </FlexBox>
        </FlexBox>
        {/* Footer */}
      </FlexBox>
    </>
  );
}

export default LandingPage