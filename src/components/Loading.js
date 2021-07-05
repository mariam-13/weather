import './loading.scss';

const Loading = ({ children, isLoading }) => {

    if (isLoading) return (<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)

    return children
};

export default Loading;
