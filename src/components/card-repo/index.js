import { BoxLeft, BoxRigth, Container, Item } from './styled'
import { TbGitFork } from "react-icons/tb";
import { BiStar } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const CardRepo = (props) => {

  const icon = { color: "gray", size: 15 }

  return (
    <Container>
      <BoxLeft>
        <label>{props.item.name}</label>
      </BoxLeft>
      <BoxRigth>
        <Item>
          <span>
            <TbGitFork size={icon.size} />
            <div>
              <label>Forks</label>
            </div>
          </span>
          <label>{props.item.forks}</label>

        </Item>
        <Item>
          <span>
            <AiOutlineEye size={icon.size} />
            <div>
              <label>Visualizações</label>
            </div>
          </span>
          <label>{props.item.watchers}</label>

        </Item>
        <Item>
          <span>
            <BiStar size={icon.size} />
            <div>
            <label>Estrelas</label>
          </div>
          </span>
          <label>{props.item.stargazers_count}</label>

        </Item>
      </BoxRigth>
    </Container>
  )
}

export default CardRepo