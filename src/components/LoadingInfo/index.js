import React from 'react';
import { Container, LoadingDots } from './styles/loadinfo';




function LoadingInfo() {

    const loadingDotsVariants = {
        start: {
            y: '0%'
        },
        end: {
            y: '100%'
        }
    };
    
    const loadingContainerVariantes = {
        start: {
            transition: {
                staggerChildren: 0.1
            }
        },
        end: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    
    const loadingDotsTransition = {
        duration: 0.4,
        yoyo: Infinity,
        ease: 'easeInOut'
    }

    return(
        <Container 
            variants={loadingContainerVariantes} 
            initial='start'
            animate='end'
        >
            <LoadingDots variants={loadingDotsVariants} transition={loadingDotsTransition}/>
            <LoadingDots variants={loadingDotsVariants} transition={loadingDotsTransition}/>
            <LoadingDots variants={loadingDotsVariants} transition={loadingDotsTransition}/>
        </Container>
    );
}

export default LoadingInfo;