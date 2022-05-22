#########################################################################
# @file build.sh
# @author qinpeng03
# @mail qinpeng03@baidu.com
# @date 2022-05-22 21:54:30
#########################################################################
#!/bin/bash

workdir=WEBSITE_ROOT
yarn build
rm -rf $workdir/dist
cp -r ./docs/.vuepress/dist $workdir
