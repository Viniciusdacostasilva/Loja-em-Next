import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/FAQSection.css';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: 'Como funciona o site?',
      answer: (
        <>
          Atualmente, o nosso site opera mais como um catálogo que é frequentemente atualizado. Aqui, você pode se informar sobre os serviços que oferecemos. Se você estiver interessado em comprar algum serviço, basta entrar em contato via{' '}
          <a href="https://discord.gg/pT3m2fDj34" target="_blank" className="text-blue-500">Discord</a> ou{' '}
          <a href="https://api.whatsapp.com/send?phone=558893681089" target="_blank" className="text-green-500">WhatsApp</a>. Também oferecemos alguns serviços personalizados e pacotes que variam de acordo com as semanas e as necessidades dos clientes. Entre em contato para obter mais informações.
        </>
      ),
    },
    {
      question: 'Como funciona o serviço de Boosting no WoW?',
      answer:
        'Após efetuar o pedido e o pagamento, nós o executamos conforme solicitado, seja com um jogador de nossa equipe ou você mesmo jogando. Dessa forma, você economiza tempo, permitindo que você faça as atividades que mais gosta no jogo, sem a necessidade de lidar com jogadores aleatórios ou qualquer coisa do tipo. Deixe o trabalho pesado conosco 😊.',
    },
    {
      question: 'Eu quero fazer um pedido grande para mim ou para minha guilda ou amigos, consigo algum desconto?',
      answer:
        'Claro! Você pode contar com descontos generosos sempre que escolher nossos serviços. Garantimos segurança e preços acessíveis.',
    },
    {
      question: 'Armor Stack e Chaves Específicas:',
      answer:
        'Em todos os nossos serviços, o valor da chave junto com o Armor Stack está incluído... (não aplicável para o início da temporada). Armor Stack é simplesmente a maior quantidade de pessoas com o mesmo tipo de armadura no mesmo grupo. No caso de placas e couro, serão 5 jogadores em uma M+, enquanto tecido e malha serão apenas 4, já que, até o momento, não existem tanques de tecido ou malha.',
    },
    {
      question: 'Quais métodos de pagamento vocês aceitam?',
      answer:
        'Trabalhamos com a plataforma do Mercado Pago, portanto, aceitamos cartões de crédito ou débito, assim como PIX.',
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="duvida">
        <h2>Dúvidas Frequentes</h2>
      </div>
      <div className="faq-questions">
        {faqData.map((item, index) => (
          <div className="faq-question" key={index}>
            <h2 onClick={() => toggleQuestion(index)}>{item.question}</h2>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
