import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography, { type TypographyProps } from '@mui/material/Typography';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import type { BuyLink } from '@/types/books';

interface OverviewCardProps {
  title: string;
  image: string;
  rank: number;
  weeksOnTheList: string;
  contributor: string;
  description: string;
  buyLinks: BuyLink[];
  extended?: boolean;
}

const Card = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'extended',
})<StackProps & { extended?: boolean }>(({ theme, extended }) => ({
  position: 'relative',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    flexDirection: extended ? 'row' : 'column',
    paddingBottom: extended ? theme.spacing(3) : 0,
    height: '100%',
    paddingRight: extended ? 0 : theme.spacing(2),
  },
}));

const BookImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'extended',
})<{ extended?: boolean }>(({ theme, extended }) => ({
  inlineSize: 45,
  blockSize: 70,
  objectFit: 'contain',
  objectPosition: 'center',

  [theme.breakpoints.up('md')]: {
    display: 'block',
    inlineSize: extended ? 100 : '100%',
    blockSize: extended ? 150 : 175,
  },
}));

const BookRank = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'extended',
})<TypographyProps & { extended?: boolean }>(({ theme, extended }) => ({
  color: theme.palette.grey[500],

  [theme.breakpoints.up('md')]: {
    position: extended ? 'relative' : 'absolute',
    top: 0,
    left: 0,
  },
}));

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#dadde9',
  },
}));

const OverviewCard = ({
  title,
  image,
  rank,
  weeksOnTheList,
  contributor,
  description,
  buyLinks,
  extended,
}: OverviewCardProps) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Card direction={{ xs: 'row', md: 'column' }} extended={extended}>
      <BookRank variant="h5" component="span" extended={extended}>{rank}</BookRank>
      <BookImage src={image} alt={title} extended={extended} />
      <Stack height="100%">
        <Typography display={{ xs: 'none', md: 'block' }}>{weeksOnTheList}</Typography>
        <Typography variant="h6" component="h3" fontWeight={600}>{title}</Typography>
        <Typography variant="subtitle1" component="span">{contributor}</Typography>
        <Typography display={{ xs: 'none', md: 'block' }} variant="body1">{description}</Typography>

        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Box marginTop="auto" display={{ xs: 'none', md: 'block' }} paddingTop={2}>
            <HtmlTooltip
              PopperProps={{
                disablePortal: true,
              }}
              arrow
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <Stack>
                  {buyLinks.map((link, index) => (
                    <Link key={index} href={link.url} target="_blank" display="block">{link.name}</Link>
                  ))}
                </Stack>
              }
            >
              <Button
                variant="contained"
                size="small"
                onClick={handleTooltipOpen}
                endIcon={<ArrowDropDownIcon fontSize="small" />}
              >Buy</Button>
            </HtmlTooltip>
          </Box>
        </ClickAwayListener>
      </Stack>
    </Card>
  )
}

export default OverviewCard;