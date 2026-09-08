import { PageIntro } from '@/components/site-shell';
import { contact, updated } from '@/lib/site';
export const metadata = { title: 'Privacidade e uso responsável' };
export default function Privacidade() {
  return (
    <>
      <PageIntro
        label="INFORMAÇÃO COM RESPONSABILIDADE"
        title="Você precisa saber o que é registrado."
      >
        Política operacional desta versão do site. Atualizada em {updated}.
      </PageIntro>
      <div className="wrap content-wrap">
        <div className="prose">
          <h2>Navegação e fontes externas</h2>
          <p>
            O código do NEXUS não inclui publicidade, rastreadores analíticos,
            pixels de redes sociais ou formulário que envie informações
            automaticamente. A hospedagem pode processar dados técnicos de
            acesso necessários à operação, como endereço de rede e registros de
            segurança, conforme suas próprias políticas.
          </p>
          <p>
            Links para fontes oficiais abrem serviços de terceiros, sujeitos às
            respectivas políticas. Os dados históricos têm períodos indicados;
            conteúdos do site não substituem a consulta aos documentos
            originais.
          </p>
          <h2>Autoavaliação voluntária</h2>
          <p>
            Com seu consentimento, o navegador armazena nome, e-mail, pontuações
            por dimensão, indicador de consistência, sinalizações agregadas,
            duração, código do relatório, versão, data de conclusão e próxima
            data permitida. A finalidade é entregar sua devolutiva e aplicar a
            carência local de três meses.
          </p>
          <p>
            As respostas individuais não são gravadas em armazenamento
            persistente nem transmitidas pelo site. Permanecem na memória da
            página durante o preenchimento e são descartadas quando o resultado
            é concluído ou a página é fechada.
          </p>
          <p>
            Os registros ficam na área local deste site no navegador até serem
            apagados por você. Esta versão não sincroniza registros entre
            dispositivos, não consulta o sistema anterior, não verifica a
            titularidade do e-mail e não oferece cadastro central. Limpar o
            navegador ou trocar de origem pode remover o bloqueio técnico, mas
            não altera a regra institucional de carência.
          </p>
          <p>
            Quem utiliza o mesmo perfil de navegador pode acessar os registros
            locais. Prefira um dispositivo pessoal protegido e guarde o
            relatório com cuidado. A associação ao grupo e o resultado de
            avaliação devem ser tratados como informações privadas.
          </p>
          <h2>Controle sobre a cópia local</h2>
          <p>
            Você pode consultar e baixar o resultado ao informar a mesma
            identificação durante a carência. Para apagar a cópia local, utilize
            as configurações de privacidade do navegador e remova os dados deste
            site. Salve seu relatório antes, se quiser conservá-lo. A exclusão
            local não elimina eventuais cópias que você tenha enviado por
            e-mail.
          </p>
          <h2>Contato e envio voluntário</h2>
          <p>
            “Preparar e-mail” apenas abre seu aplicativo com um rascunho. Você
            revisa destinatário, assunto e conteúdo antes de enviar. O relatório
            pode conter sua identificação e avaliação. O site não envia
            mensagens por conta própria.
          </p>
          <p>
            Informações encaminhadas à coordenação precisam de tratamento
            separado, acesso limitado, finalidade definida e rotina de retenção.
            O registro de ingresso exige confirmação humana; não há promessa de
            aprovação automática nem de armazenamento central seguro nesta
            versão.
          </p>
          <h2>Canvas e ferramentas</h2>
          <p>
            O canvas é preenchido na memória da página. Ao escolher baixar, o
            arquivo é salvo no seu dispositivo. Nada é enviado, e os campos não
            são recuperados automaticamente depois que a página é fechada. Não
            inclua documentos sigilosos ou dados identificáveis de terceiros.
          </p>
          <h2>Limites do questionário</h2>
          <p>
            É um instrumento exploratório de autorrelato, sem validação
            psicométrica apresentada. A chamada “integridade” é uma fórmula de
            consistência; não mede honestidade nem permite concluir que alguém
            mentiu. Saúde, acessibilidade, experiências pessoais e contexto de
            vida não podem ser reduzidos a uma pontuação.
          </p>
          <p>
            Decisões de admissão e desenvolvimento precisam de escuta, exemplos
            de comportamento, revisão de contexto e possibilidade de
            contestação. O código gerado identifica a tentativa local e não
            certifica autenticidade.
          </p>
          <h2>Responsabilidade editorial</h2>
          <p>
            O contato responsável por esta versão é a coordenação do projeto,
            pelo endereço fornecido abaixo. A estrutura jurídica e as políticas
            de eventual operação centralizada precisam ser formalizadas antes de
            ampliar a coleta de dados. Este texto descreve o funcionamento
            implementado; não é certificação de conformidade jurídica.
          </p>
          <a
            className="button"
            href={`mailto:${contact}?subject=${encodeURIComponent('NEXUS — privacidade e dados')}`}
          >
            Contato sobre privacidade →
          </a>
          <h2>Uso do conteúdo</h2>
          <p>
            As propostas são ideias para estudo. Não representam serviços
            disponíveis, políticas aprovadas ou resultados alcançados. A
            paisagem da página inicial é uma ilustração gerada por inteligência
            artificial; não é fotografia documental de Sobral. O conteúdo deve
            ser usado com respeito às fontes e às pessoas.
          </p>
        </div>
      </div>
    </>
  );
}

export const dynamic = 'force-static';
