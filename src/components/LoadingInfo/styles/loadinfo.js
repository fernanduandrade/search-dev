import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 15rem;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    margin: 260px 0 0 400px;
`;

export const LoadingDots = styled(motion.span)`
    display: block;
    width: 4rem;
    height: 4rem;
    border-radius: 6rem;
    background-color: var(--color-loading-color);
`;