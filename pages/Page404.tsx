import { Button } from "../components";
import { Title24 } from "../Typography";

interface Page404Props {
  className?: string;
}
const Page404  = (props: Page404Props) => {
  const { className } = props;
    
  return (
    <div className={`page-404 ${className}`}>
      <div className="page-404-inner">
        <img src="images/icons/404-help.svg" className="mb-32" />
        <Title24 title="Мы работаем над этим разделом" className="mb-12" />
        <Title24 title="Попробуйте зайти позже" className="font-400 third-color mb-32" />
        <Button title="Вернуться на Главную" className="btn btn-primary btn-54 prl-64" />
      </div>
    </div>
  );
}

export default Page404;
