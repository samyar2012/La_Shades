import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

    (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '685468733cb4c74c7aee8b3e' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: "https://runtime-api.voiceflow.com"
            }
          });
        }
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');

const Home = () => {
  return (
    <>  
      <Hero />
      <Features />
      <Products />
      <Services />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home