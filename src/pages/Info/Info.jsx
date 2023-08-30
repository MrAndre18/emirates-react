import React from 'react';
import Title from '../../components/Title/Title';
import { tabs } from '../../utils/navigation';
import InfoRouter from '../../components/InfoRouter';
import Tabs from '../../components/Tabs/Tabs';

const Info = () => {
  return (
    <main className="content info">
      <Title
        title='FAQ / INFO О Бизнесе'
        subtitle='Актуальная справочная информация о жизни и работе в Арабских Эмиратах, о законодательстве и общественных нормах. Ответы на любые вопросы — на одной странице и простым языком'
      />

      <Tabs tabs={tabs} body={<InfoRouter />} />

    </main>
  );
};

export default Info;