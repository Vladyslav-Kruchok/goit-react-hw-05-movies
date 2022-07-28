export const HomeListItem = ({film: {id, original_name,original_title }}) => { 
return (
        <li>
        <a id={id} href="#" onClick={() => { }}>{ original_name || original_title }</a>
        </li>
    );
};
