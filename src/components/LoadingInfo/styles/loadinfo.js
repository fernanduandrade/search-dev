import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: space-around;
    margin: 140px 160px 0 0;
`;

export const LoadingDots = styled(motion.span)`
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 6rem;
    background-color: var(--color-loading-color);
`;