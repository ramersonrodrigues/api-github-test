import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Bio, ButtonCustom, Container, Infor, Line, Name } from './styled'
import { AiOutlineArrowRight } from "react-icons/ai";
import { getReposUserGithub } from 'redux/slices/sliceReposUserGithub';

const CardProfile = (props) => {

    const dispatch = useDispatch()
    const dataUserGithub = useSelector((state) => state.sliceUserGithub)

    const getRepos = () => {
        dispatch(getReposUserGithub({ user: dataUserGithub.data?.login, order: { name: "full_name", type: "asc" }, language: "all", archived: false, disabled: false }))
    }

    return (
        <Container>
            <Avatar>
                <img src={dataUserGithub.data?.avatar_url} />
            </Avatar>
            <Name>{dataUserGithub.data?.name}</Name>
            <Bio>{dataUserGithub.data?.bio}</Bio>
            <Infor>
                <Line>
                    <label>Repositorios</label>
                    <span>{dataUserGithub.data?.public_repos}</span>
                </Line>
                <Line>
                    <label>Seguidores</label>
                    <span>{dataUserGithub.data?.followers}</span>
                </Line>
                <Line>
                    <label>Seguindo</label>
                    <span>{dataUserGithub.data?.following}</span>
                </Line>
            </Infor>
            <ButtonCustom onClick={() => { getRepos() }}>
                <label>Ver Repositórios</label>
                <AiOutlineArrowRight size={15} />
            </ButtonCustom>
        </Container>
    )
}

export default CardProfile