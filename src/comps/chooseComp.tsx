import { createStyles, SegmentedControl } from '@mantine/core';
import styled from 'styled-components';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  active: {
    backgroundImage: theme.fn.gradient({ from: 'pink', to: 'orange' }),
  },

  control: {
    border: '0 !important',
  },

  labelActive: {
    color: `${theme.white} !important`,
  },
}));

export function GradientSegmentedControl({c1="", c2="", c3="", c4="", c5="",onChange }:any) {
  const { classes } = useStyles();
  return (
    <SegmentedControl_
      radius="xl"
      size="md"
      data={[c1, c2,c3, c4,c5,]}
      classNames={classes}
      onChange={onChange}
    />
  );
}
const SegmentedControl_ = styled(SegmentedControl)`
    width: 100%;
`