import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  //hook creado por la gente de react router dom para pasar parametros entre componentes
  const { id } = useParams();

  //con este hook especificamos que cuando el id del hero cambie se vuelva a llamar la funcion, mientras tanto esta memorizada
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
    // Cuando le pasamos el To -1 nos regresa a la url anterios del historial
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
