import Pagination from "@mui/material/Pagination";

const Paginate = (props: any) => {
return (
    <Pagination count={props.totalPages} page={props.pageNumber} color="primary" onChange={(e,page)=>props.handlePageChange(page)} />
);
};

export default Paginate;