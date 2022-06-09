import { Box } from "@mui/material";




const Page = React.forwardRef(({titleName = 'Welcome',children,...other},ref) =>(
    <Box ref = {ref} {...other}>
        <Helmet>
            <title>
                {titleName}
            </title>
        </Helmet>
        {children}
    </Box>
));

export default Page;