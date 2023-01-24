import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper } from '@mantine/core';
import { IconSwimming } from '@tabler/icons';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

export function StatsCard({title1,title2,icon,P100}:any) {
  const { classes } = useStyles();

  return (
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <img style={{ width:"60px"}} src="/correct.svg" />
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title}>
        {title1}
      </Text>
      <Text color="dimmed" align="center" size="sm">
        {title2}
      </Text>

      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Progress
        </Text>
        <Text size="sm" color="dimmed">
          {P100}%
        </Text>
      </Group>

      <Progress color="green" value={P100} mt={5} />

      <Group position="apart" mt="md">
        {/* <Text size="sm">20 / 36 km</Text>
        <Badge size="sm">4 days left</Badge> */}
      </Group>
    </Paper>
  );
}