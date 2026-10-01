# AtendeBot 360 — Chatbot para negócios locais

MVP comercial de chatbot white-label para vender para comércios locais.

## Versão atual

A versão comercial inclui:

- painel do cliente responsivo;
- assistente "Criar meu atendente" em 3 etapas;
- modelos prontos por segmento;
- editor de nome, WhatsApp, horários, endereço, serviços, preços, mensagens e cores;
- chat demonstrativo com respostas automáticas;
- captação de leads;
- funil Conversas → Leads → WhatsApp → Vendas;
- registro manual de venda e valor por lead;
- receita atribuída e taxa de conversão no dashboard;
- abertura de WhatsApp por lead;
- exportação de leads em CSV;
- widget real instalável via `widget.js`;
- instruções para site próprio, WordPress e link de demonstração;
- dados persistidos localmente via `localStorage`.

## Modelos prontos

- Barbearia
- Restaurante
- Estética
- Loja
- Oficina
- Clínica
- Imobiliária
- Açaí / Delivery

## Fluxo comercial demonstrado

1. O cliente escolhe o segmento.
2. Informa nome, WhatsApp, horário, serviço e endereço.
3. O AtendeBot cria uma configuração inicial automaticamente.
4. O visitante conversa com o bot.
5. O bot captura interesse e contato.
6. O lead aparece no painel.
7. O comércio abre o WhatsApp pelo lead.
8. Quando fechar a venda, registra o valor.
9. O dashboard atualiza conversão e receita atribuída.

## Instalação

Exemplo:

```html
<script src="https://atendebot360.onrender.com/widget.js"
  data-business="Meu Negócio"
  data-whatsapp="5517999999999"></script>
```

## Importante sobre esta fase

Esta versão ainda usa armazenamento local no navegador para painel, métricas e leads. O widget instalável funciona como atendimento e encaminhamento para WhatsApp, mas os leads de sites externos ainda não sincronizam com o dashboard.

Para transformar o produto em SaaS real, a próxima fase é:

- backend e banco de dados;
- autenticação real;
- contas por cliente;
- multiempresas;
- endpoint do widget para registrar conversas e leads;
- planos e cobrança recorrente;
- domínio/subdomínio por cliente;
- integração oficial com WhatsApp quando fizer sentido.

## Oferta comercial sugerida para teste

- implantação/configuração: R$ 197 a R$ 497;
- plano Essencial: R$ 79/mês;
- plano Profissional: R$ 149/mês;
- plano Negócios: R$ 249/mês.

Os preços acima são uma hipótese comercial para validação e podem ser ajustados conforme os primeiros clientes.
