import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Nav from "../components/Nav";
import useStyles from "../hooks/useStyles";
import { Code } from "../components/Code";

export default function Index() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Nav
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>Prompting People</Typography>
        <Code language="python">
          {`from sys import argv
script, user_name = argv
prompt = '> '

print(f"Hi {user_name}, I'm the {script} script.")
print("I'd like to ask you a few questions.")
print(f"Do you like me {user_name}?")
likes = input(prompt)

print(f"Where do you live {user_name}?")
lives = input(prompt)
print("What kind of computer do you have?")
computer = input(prompt)
print(f"""
Alright, so you said {likes} about liking me.
You live in {lives}.  Not sure where that is.
And you have a {computer} computer.  Nice.
""")`}
        </Code>
        <Typography paragraph>Embed</Typography>
        <iframe src="https://trinket.io/embed/python/ae366fe9f8" width="100%" height="356" frameborder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
      </main>
    </div>
  );
}
