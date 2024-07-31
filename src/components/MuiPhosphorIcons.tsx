import React from 'react'
import { Divider, Typography, Link } from '@mui/material';
import { Horse, Heart, Cube } from "@phosphor-icons/react";

export const MuiPhosphorIcons = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Phosphor Icons: 9,072</Typography>
            <Divider />
            <Link href="https://phosphoricons.com/" target="_blank" rel="noopener noreferrer">Phosphor Icons</Link>
            <Horse />
            <Heart color="#AE2983" weight="fill" size={32} />
            <Cube color="teal" weight="duotone" />
        </div>

    )
}
